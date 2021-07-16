import React, { useEffect, useState } from 'react';
import UsersApi from '../../api/Users';

function Profile(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    initialLoad();

    // eslint-disable-next-line
  }, []);

  const initialLoad = async () => {
    if (props.match.path === '/members/profile') {
      await UsersApi.getProfile()
        .then((res) => {
          console.log(res);
          if (res.type === 'success') {
            setUser(res.data);
          } else throw res;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await UsersApi.getUserData(props.match.params.id)
        .then((res) => {
          console.log(res);
          if (res.type === 'success') {
            setUser(res.data);
          } else throw res;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    user && (
      <div className="profile">
        <div className="details">
          <h1>{user.user ? user.user.user_name : 'Not available'}</h1>
          <h1>{user.bio}</h1>
          <h1>{user.user ? user.user.email : 'Not available'}</h1>
          <h1>{user.github_username}</h1>
          <h1>{user.expertise}</h1>
          <h1>{user.user ? user.user.year : 'Not available'}</h1>
        </div>
      </div>
    )
  );
}

export default Profile;
