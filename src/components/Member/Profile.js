import React, { useEffect, useState } from 'react';
import { IoIosReturnLeft } from 'react-icons/io';
import { useParams, useRouteMatch } from 'react-router-dom';
import UsersApi from '../../api/Users';
import ProfileDetailView from './ProfileDetailView';
import { history } from '../../history';
import CreateNotifications from '../config/Notifications';

function Profile() {
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState({});

  const params = useParams();
  const match = useRouteMatch();

  useEffect(() => {
    let isSubscribed = true;
    const initialLoad = async () => {
      if (match.path === '/members/profile') {
        await UsersApi.getProfile()
          .then((res) => {
            if (!isSubscribed) return;
            if (res.type === 'success') {
              setUser(res.data);
            } else throw res;
          })
          .catch((err) => {
            CreateNotifications('error', err.message);
          });
      } else {
        await UsersApi.getUserData(params.id)
          .then((res) => {
            console.log(res);
            if (!isSubscribed) return;
            if (res.type === 'success') {
              setUser(res.data);
            } else throw res;
          })
          .catch((err) => {
            CreateNotifications('error', err.message);
          });
      }
    };
    initialLoad();

    return () => (isSubscribed = false);
  }, [match, params]);

  return (
    <div className="profile_page">
      <div className="topbar">
        <IoIosReturnLeft size={32} onClick={() => history.back()} />
        {match.path === '/members/profile' && (
          <h3 onClick={() => setEdit((e) => !e)}>
            {' '}
            {edit ? 'Edit' : 'Cancel'}{' '}
          </h3>
        )}
      </div>
      <ProfileDetailView data={user} />
    </div>
  );
}

export default Profile;
