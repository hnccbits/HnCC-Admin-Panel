import React from 'react';
import Screen from '../Screen';
import { useHistory } from 'react-router-dom';

function Member() {
  const history = useHistory();
  return (
    <Screen>
      <div className="memberContainer">
        <div
          onClick={() => history.push('/members/final')}
          className="memberChild"
        >
          <div className="year">
            <MemberList title="Final" num={20} />
          </div>
        </div>
        <div
          onClick={() => history.push('/members/prefinal')}
          className="memberChild"
        >
          <div className="year">
            <MemberList title="Pre-Final" num={20} />
          </div>
        </div>
        <div
          onClick={() => history.push('/members/sophomores')}
          className="memberChild"
        >
          <div className="year">
            <MemberList title="Sophomores" num={20} />
          </div>
        </div>
        <div
          onClick={() => history.push('/members/freshers')}
          className="memberChild"
        >
          <div className="year">
            <MemberList title="Freshers" num={20} />
          </div>
        </div>
      </div>
    </Screen>
  );
}

export default Member;

const MemberList = ({ title, num }) => {
  return (
    <div className="memberList">
      <p>{title}</p>
      {num}
    </div>
  );
};
