import {
  getRefreshToken,
  getToken,
  removeToken,
  storeTokens,
} from '../context/storage';
import { history } from '../history';
import axiosInstance from './axios';

const login = async (data) => {
  await axiosInstance
    .post('/token', data)
    .then((res) => {
      if (res.status === 200) {
        storeTokens(res.data.access, res.data.refresh);
        axiosInstance.defaults.headers['Authorization'] = getToken();
        history.push('/');
      } else throw res;
    })
    .catch((err) => {
      console.log(err);
    });
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
