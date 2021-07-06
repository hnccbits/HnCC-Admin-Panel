import React from 'react';
import Screen from '../Screen';
import '../../assets/scss/_member.scss'
function Member() {
  return (
    <Screen>
    <div className="memberContainer">
        <div className="memberChild">
            <div className="year">
              <p>Final</p>
            </div>
        </div>
        <div className="memberChild">
            <div className="year">
              <p>Pre-Final</p>
            </div>
        </div>
        <div className="memberChild">
            <div className="year">
              <p>Sophomores</p>
            </div>
        </div>
        <div className="memberChild">
            <div className="year">
              <p>Freshers</p>
            </div>
        </div>
    </div>
    </Screen>
  );
}

export default Member;






