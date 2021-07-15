import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UsersApi from '../../api/Users';
import Screen from '../Screen';

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

function Home() {
  const [finalCount, setFinalCount] = useState(0);
  const [freshersCount, setFreshersCount] = useState(0);
  const [memberCount, setMemberCount] = useState(0);
  const [prefinalCount, setPrefinalCount] = useState(0);
  const [sophomoreCount, setSophomoreCount] = useState(0);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    await UsersApi.getAllUsers()
      .then((res) => {
        if (res.type === 'success') {
          setMemberCount(res.data.length);
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
        console.log(err);
      });

    await UsersApi.getProfile().then((res) => {
      console.log(res);
    });
  };
  return (
    <Screen>
      <div className="home">
        <div className="cardRow">
          <div className="card">
            <Circle num={memberCount} title={'Members'} />
            <DetailRowMember
              final={finalCount}
              prefinal={prefinalCount}
              freshers={freshersCount}
              sophomore={sophomoreCount}
              className="memberRow"
            />
            <Link to="/members">View More</Link>
          </div>
          <Card
            title="Meets"
            num={33}
            data={[
              { title: 'Last Meet', decp: 'Agenda of the meet', nav: 'meet' },
              { title: 'New Meet', decp: 'Agenda of the meet', nav: 'meet' },
            ]}
            nav="meet"
            className="meets"
          />
          <Card
            title="Chapters"
            num={2}
            data={[
              { title: 'CodeChef', decp: 'Team Lead', nav: 'chapters' },
              { title: 'GfG', decp: 'Team Lead', nav: 'chapters' },
            ]}
            nav="chapters"
            className="chapters"
          />
          <Card
            title="Events"
            num={10}
            data={[
              {
                title: 'Last Event',
                decp: 'Agenda of the event',
                nav: 'events',
              },
              {
                title: 'New Event',
                decp: 'Agenda of the event',
                nav: 'events',
              },
            ]}
            nav="events"
            className="events"
          />
        </div>
      </div>
    </Screen>
  );
}

export default Home;

const Card = ({ className, num, title, data, nav }) => {
  return (
    <div className={`card ${className}`}>
      <Circle num={num} title={title} />
      <DetailRow data={data} />
      <Link to={`/${nav}`}>View More</Link>
    </div>
  );
};

const Circle = ({ num, title }) => {
  return (
    <div className="circle">
      {num}
      <p>{title}</p>
    </div>
  );
};

const ColumnMember = ({ data }) => {
  return (
    <div className="column">
      {data.map((item, index) => {
        return (
          <DetailBox
            key={index}
            num={item.num}
            nav={item.nav}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

const DetailBox = ({ num, title, nav, date = null }) => {
  const history = useHistory();

  return (
    <div onClick={() => history.push(`/${nav}`)} className="detailBox">
      <h4>{num}</h4>
      <p>{title}</p>
      {date && <h6>{date}</h6>}
    </div>
  );
};

const DetailRow = ({ data }) => {
  return (
    <div className="detailRow">
      {data.map((item, index) => {
        return (
          <DetailBox
            key={index}
            num={item.title}
            title={item.decp}
            date={new Date().toLocaleDateString()}
            nav={item.nav}
          />
        );
      })}
    </div>
  );
};

const DetailRowMember = ({
  freshers,
  sophomore,
  prefinal,
  final,
  className = '',
}) => {
  return (
    <div className={`detailRow ${className}`}>
      <ColumnMember
        data={[
          { num: final, nav: 'members', title: 'Final' },
          { num: prefinal, nav: 'members', title: 'Prefinal' },
        ]}
      />
      <ColumnMember
        data={[
          { num: sophomore, nav: 'members', title: 'Sophomore' },
          { num: freshers, nav: 'members', title: 'Freshers' },
        ]}
      />
    </div>
  );
};
