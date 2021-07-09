import React, { useEffect, useState } from 'react';
import UsersApi from '../../api/Users';

function Profile(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    initialLoad();
    console.log(props);
  }, []);

  const initialLoad = async () => {
    await UsersApi.getProfile(1)
      .then((res) => {
        if (res.type === 'success') {
          setUser(res.data);
        } else throw res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    user && (
      <div className="profile">
        <div className="details">
          <h1>{user.user.user_name}</h1>
          <h1>{user.bio}</h1>
          <h1>{user.user.email}</h1>
          <h1>{user.github_username}</h1>
          <h1>{user.expertise}</h1>
          <h1>{user.user.year}</h1>
        </div>
      </div>
    )
  );
}

export default Profile;
