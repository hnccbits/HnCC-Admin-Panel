import React from 'react';
import { useHistory } from 'react-router-dom';

function MemberContent({ name, branch, imageUrl, year, id }) {
  const history = useHistory();
  return (
    <div className="content">
      <div className="profile">
        <img src={imageUrl} alt={`${name}${branch}`} />
      </div>
      <h3>{name}</h3>
      <p>
        {year} {branch}
      </p>
      <p onClick={() => history.push(`/members/${year}/${id}`)}>View profile</p>
    </div>
  );
}
export default MemberContent;
