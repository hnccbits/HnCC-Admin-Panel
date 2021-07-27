import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UsersApi from '../../api/Users';
import CreateNotifications from '../config/Notifications';

const getYearlyCount = (data) => {
  const final = data.filter((item) => item.year === 2017).length;
  const freshers = data.filter((item) => item.year === 2020).length;
  const prefinal = data.filter((item) => item.year === 2018).length;
  const sophomore = data.filter((item) => item.year === 2019).length;

  const count = {
    final,
    freshers,
    prefinal,
    sophomore,
  };
  return count;
};

function Member() {
  const [finalCount, setFinalCount] = useState(0);
  const [freshersCount, setFreshersCount] = useState(0);
  const [prefinalCount, setPrefinalCount] = useState(0);
  const [sophomoreCount, setSophomoreCount] = useState(0);

  const history = useHistory();

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    await UsersApi.getAllUsers()
      .then((res) => {
        if (res.type === 'success') {
          const { freshers, sophomore, prefinal, final } = getYearlyCount(
            res.data
          );
          setFinalCount(final);
          setFreshersCount(freshers);
          setSophomoreCount(sophomore);
          setPrefinalCount(prefinal);
        } else throw res;
      })
      .catch((err) => {
        CreateNotifications('error', err.message);
      });

    // await BackendApi.createPost(1);
  };
  return (
    <div className="memberContainer">
      <div
        onClick={() => history.push('/members/final')}
        className="memberChild"
      >
        <div className="year">
          <MemberList title="Final" num={finalCount} />
        </div>
      </div>
      <div
        onClick={() => history.push('/members/prefinal')}
        className="memberChild"
      >
        <div className="year">
          <MemberList title="Pre-Final" num={prefinalCount} />
        </div>
      </div>
      <div
        onClick={() => history.push('/members/sophomores')}
        className="memberChild"
      >
        <div className="year">
          <MemberList title="Sophomores" num={sophomoreCount} />
        </div>
      </div>
      <div
        onClick={() => history.push('/members/freshers')}
        className="memberChild"
      >
        <div className="year">
          <MemberList title="Freshers" num={freshersCount} />
        </div>
      </div>
    </div>
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
