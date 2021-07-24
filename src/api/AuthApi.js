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

const login = async (data) => {
  await axiosInstance
    .post('/token/', data)
    .then((res) => {
      if (res.status === 200) {
        storeTokens(res.data.access, res.data.refresh);
        axiosInstance.defaults.headers['Authorization'] = getToken();
        responseData.message = res.statusText;
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.message = err.statusText;
      responseData.type = 'error';
    });

  return responseData;
};

const logout = async () => {
  await axiosInstance
    .post('/user/logout/blacklist/', getRefreshToken())
    .then((res) => {
      if (res.status === 200) {
        removeToken();
      } else throw res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const AuthApi = {
  login,
  logout,
};

export default AuthApi;
