import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { logout } from '../../api/AuthApi';

function Logout() {
  useEffect(() => {
    const initialLoad = async () => {
      await logout();
    };
    initialLoad();
  });
  return <Redirect to="/login" />;
}

export default Logout;
