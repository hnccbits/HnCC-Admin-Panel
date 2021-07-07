import React from 'react';
import Screen from '../Screen';
import '../../assets/scss/_member.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { useHistory } from 'react-router-dom';



function Member() {
  const history = useHistory();
  return (
    <Router>
    <Screen>
    <div className="memberContainer">
        <div onClick={() => history.push('/members/final')} className="memberChild">
            <div className="year">
              <MemberList  title="Final" num={20}/>
              
            </div>
        </div>
        <div onClick={() => history.push('/members/prefinal')} className="memberChild">
            <div className="year">
             <MemberList  title="Pre-Final"  num={20}/>
             
            </div>
        </div>
        <div onClick={() => history.push('/members/sophomores')} className="memberChild">
            <div className="year">
             <MemberList  title="Sophomores"  num={20}/>
             
            </div>
        </div>
        <div onClick={() => history.push('/members/freshers')} className="memberChild">
            <div className="year">
             <MemberList title="Freshers"  num={20}/>
            
            </div>
        </div>
    </div>
    </Screen>
    </Router>
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




