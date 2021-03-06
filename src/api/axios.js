import axios from 'axios';
import CreateNotifications from '../components/config/Notifications';
import {
  getToken,
  getRefreshToken,
  storeTokens,
  removeToken,
} from '../context/storage';

const baseURL = 'http://127.0.0.1:8000/api';

const token = getToken();

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 4000,
  timeoutErrorMessage:
    'Failed to connect with the server. Please check your internet connection.',
  headers: {
    Authorization: `JWT ${token}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === 'undefined') {
      CreateNotifications(
        'error',
        'A server/network error occurred. ' +
          'Looks like CORS might be the problem. ' +
          'Sorry about this - we will get it fixed shortly.'
      );
      return Promise.reject(error.response);
    }

    if (error.response.status === 403) {
      CreateNotifications('error', 'Access Denied! Not a valid user.');

      return Promise.reject(error.response);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === baseURL + '/token/refresh/'
    ) {
      window.location.href = '/';
      removeToken();
      return Promise.reject(error.response);
    }

    if (
      error.response.data.code === 'token_not_valid' &&
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
      const refreshToken = getRefreshToken();

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

        const now = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post('/token/refresh/', { refresh: refreshToken })
            .then((response) => {
              storeTokens(response.data.access, response.data.refresh);
              axiosInstance.defaults.headers['Authorization'] =
                response.data.access;
              originalRequest.headers['Authorization'] = response.data.access;

              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              CreateNotifications('error', 'Something went wrong');
            });
        } else {
          CreateNotifications(
            'error',
            `Refresh token is expired, ${tokenParts.exp}, ${now}`
          );
          removeToken();
          window.location.href = '/login';
        }
      } else {
        CreateNotifications(
          'error',
          'Refresh token not available. Sign In Required'
        );
        removeToken();
        window.location.href = '/login';
      }
    }
    return Promise.reject(error.response);
  }
);

export default axiosInstance;
