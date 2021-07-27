import CreateNotifications from '../components/config/Notifications';
import {
  getRefreshToken,
  getToken,
  removeToken,
  storeTokens,
} from '../context/storage';
import axiosInstance from './axios';

let responseData = {
  message: 'API not called',
  type: 'error',
};

export const login = async (data) => {
  await axiosInstance
    .post('/token/', data)
    .then((res) => {
      if (res.status === 200) {
        CreateNotifications('success', 'Successfully Logged In');
        storeTokens(res.data.access, res.data.refresh);
        axiosInstance.defaults.headers['Authorization'] = getToken();
        responseData.message = res.statusText;
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      CreateNotifications('error', `${err.statusText} | ${err.status}`);
      responseData.message = err.statusText;
      responseData.type = 'error';
    });

  return responseData;
};

export const logout = async () => {
  const refreshToken = getRefreshToken();
  await axiosInstance
    .post('/user/logout/blacklist/', { refresh_token: refreshToken })
    .then((res) => {
      if (res.status === 205) {
        CreateNotifications('Will see you soon.');
        removeToken();
      } else throw res;
    })
    .catch((err) => {
      CreateNotifications(
        'error',
        `Something went wrong. Please Try again. ${err.statusText} | ${err.status}`
      );
    });
};

const AuthApi = {
  login,
  logout,
};

export default AuthApi;
