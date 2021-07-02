import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Screen from '../Screen';

function Home() {
  return (
    <Screen>
      <div className="home">
        <div className="cardRow">
          <div className="card">
            <Circle num={60} title={'Members'} />
            <DetailRowMember className="memberRow" />
            <Link to="/members">View More</Link>
          </div>
          <Card
            title="Meets"
            num={33}
            data={[
              { title: 'Last Meet', decp: 'Agenda of the meet', nav: 'meets' },
              { title: 'New Meet', decp: 'Agenda of the meet', nav: 'meets' },
            ]}
            nav="meets"
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
        <div className="timeline">
          <div className="details"></div>
          <div className="tree"></div>
        </div>
      </div>
    </Screen>
  );
}

export default Home;

const ColumnMember = ({ data }) => {
  return (
    <div className="column">
      {data.map((item) => {
        return <DetailBox num={item.num} nav={item.nav} title={item.title} />;
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

const Circle = ({ num, title }) => {
  return (
    <div className="circle">
      {num}
      <p>{title}</p>
    </div>
  );
};

const DetailRowMember = ({ className = '' }) => {
  return (
    <div className={`detailRow ${className}`}>
      <ColumnMember
        data={[
          { num: 20, nav: 'members', title: 'Final' },
          { num: 20, nav: 'members', title: 'Prefinal' },
        ]}
      />
      <ColumnMember
        data={[
          { num: 20, nav: 'members', title: 'Sophomore' },
          { num: 20, nav: 'members', title: 'Freshers' },
        ]}
      />
    </div>
  );
};

const DetailRow = ({ data }) => {
  return (
    <div className="detailRow">
      {data.map((item) => {
        return (
          <DetailBox
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

const Card = ({ className, num, title, data, nav }) => {
  return (
    <div className={`card ${className}`}>
      <Circle num={num} title={title} />
      <DetailRow data={data} />

      <Link to={`/${nav}`}>View More</Link>
    </div>
  );
};
