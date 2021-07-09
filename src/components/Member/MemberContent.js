import React from 'react';
import { useHistory } from 'react-router-dom';

function MemberContent({ name, branch, imageUrl, link }) {
  const history = useHistory();
  return (
    <div className="content">
      <div className="profile">
        <img src={imageUrl} alt="profile-pic" />
      </div>
      <h3>{name}</h3>
      <p>2k19 {branch}</p>
      <a onClick={() => history.push('/members/profile')} href={link}>
        View profile
      </a>
    </div>
  );
}
export default MemberContent;
