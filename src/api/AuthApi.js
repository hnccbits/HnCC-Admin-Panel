import axios from 'axios';
import {
  getRefreshToken,
  getToken,
  removeToken,
  storeTokens,
} from '../context/storage';
import { history } from '../history';
import axiosInstance from './axios';

const login = async (data) => {
  axiosInstance.post('/token', data).then((res) => {
    storeTokens(res.data.access, res.data.refresh);
    axiosInstance.defaults.headers['Authorization'] = getToken();
    history.push('/');
  });
};

const logout = async () => {
  await axios
    .post('http://127.0.0.1:8000/api/user/logout/blacklist/', getRefreshToken())
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
