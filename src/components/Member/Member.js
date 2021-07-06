import React from 'react';
import Screen from '../Screen';
import '../../assets/scss/_member.scss'
function Member() {
  return (
    <Screen>
    <div className="memberContainer">
        <div className="memberChild">
            <div className="year">
              <MemberList  title="Final" num={20}/>
            </div>
        </div>
        <div className="memberChild">
            <div className="year">
             <MemberList  title="Pre-Final"  num={20}/>
            </div>
        </div>
        <div className="memberChild">
            <div className="year">
             <MemberList  title="Sophomores"  num={20}/>
            </div>
        </div>
        <div className="memberChild">
            <div className="year">
             <MemberList title="Freshers"  num={20}/>
            </div>
        </div>
    </div>
    </Screen>
  );
}

export default Member;

const MemberList = ({ title,num }) => {
  return (
    <div className="memberList">
      <p>{title}</p>
      {num}
    </div>
  );
};




