import { useEffect } from 'react';
import { Redirect } from 'react-router';
import axiosInstance from '../../api/axios';
import { removeToken, getRefreshToken } from '../../context/storage';

function Logout() {
  useEffect(() => {
    const initialLoad = async () => {
      const refreshToken = getRefreshToken();

      await axiosInstance
        .post('/user/logout/blacklist/', { refresh_token: refreshToken })
        .then((res) => {
          if (res.status === 205) {
            removeToken();
          } else throw res;
        })
        .catch((err) => {
          console.log(err, err.status);
        });
    };
    initialLoad();
  });
  return <Redirect to="/login" />;
}

export default Logout;
