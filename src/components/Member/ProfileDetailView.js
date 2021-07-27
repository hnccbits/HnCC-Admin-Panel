import React, { useEffect, useState } from 'react';
import {
  IoIosAnalytics,
  IoIosCall,
  IoIosCode,
  IoIosLocate,
  IoIosMailOpen,
  IoIosMedal,
} from 'react-icons/io';
import GithubApi from '../../api/GithubApi';
import UsersApi from '../../api/Users';
import CreateNotifications from '../config/Notifications';

function ProfileDetailView({ data }) {
  const [githubData, setGithubData] = useState({});
  const [githubRepoData, setGithubRepoData] = useState([]);
  const [codingData, setCodingData] = useState({});

  const getWeekDiff = (data) => {
    const today = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    let index = 0;

    while (index < data.length) {
      let dataItem = data[index];
      let date = new Date(dataItem.updated_at).getDate();
      let dataMonth = new Date(dataItem.updated_at).getMonth();
      let dataYear = new Date(dataItem.updated_at).getFullYear();

      if (Math.abs(year - dataYear) >= 1) return index;
      if (Math.abs(month - dataMonth) >= 1) return index;

      if (date > today) {
        if (date + 30 - today > 7) return index;
      } else {
        if (date - today > 7) return index;
      }

      index = index + 1;
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    if (!isSubscribed) return;
    const initialLoad = async () => {
      await GithubApi.getProfileInfo('Zeeshan-2k1')
        .then((res) => {
          if (res.type === 'success') {
            if (!isSubscribed) return;
            setGithubData(res.data);
          } else throw res;
        })
        .catch((err) => {
          CreateNotifications('error', err.message);
        });
      await GithubApi.getProfileRepoInfo('Zeeshan-2k1')
        .then((res) => {
          if (!isSubscribed) return;
          if (res.type === 'success') {
            setGithubRepoData(res.data);
          } else throw res;
        })
        .catch((err) => {
          CreateNotifications('error', err.message);
        });
      await UsersApi.getUserCodingProfile('zeeshan_2k1')
        .then((res) => {
          if (!isSubscribed) return;
          if (res.type === 'success') {
            console.log(res.data);
            setCodingData(res.data);
          } else throw res;
        })
        .catch((err) => {
          CreateNotifications('error', err.message);
        });
    };

    initialLoad();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <div className="profile-detail-view">
      <div className="header">
        <h2>{data && data.user ? data.user.user_name : 'NA'}</h2>
        <div className="header-detail-box">
          <h4>{data && data.user ? data.user.year : 'NA'}, Sophomore</h4>
          <h4>ECE | Web Developer</h4>
        </div>
      </div>
      <div className="body">
        <h3 className="title">Personal Details</h3>
        <div className="personal-detail">
          <div className="column">
            <div className="detail">
              <IoIosCall /> <span>7004858548</span>
            </div>
            <div className="detail">
              <IoIosMailOpen />{' '}
              <span>{data && data.user ? data.user.email : 'NA'}</span>
            </div>
            <div className="detail">
              <IoIosMedal /> <span>MERN, WebGl, C++</span> <h6>(skills)</h6>
            </div>
          </div>
          <div className="column">
            <div className="detail">
              <IoIosAnalytics /> <span>2</span> <h6>(Internships)</h6>
            </div>
            <div className="detail">
              <IoIosCode /> <span>C++, JS</span> <h6>(Language)</h6>
            </div>
            <div className="detail">
              <IoIosLocate /> <span>Ranchi, Jharkhand</span>
            </div>
          </div>
        </div>
        <h3 className="title">Github Details</h3>
        {githubData ? (
          <div className="platform-details">
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.github.com/${githubData.login}`}
            >
              Github Id: {githubData.login}
            </a>
            <div className="platform-detail-header">
              <div className="column">
                <h5>Followers: {githubData.followers || 'NA'}</h5>
                <h5>Followings: {githubData.followings || 'NA'}</h5>
                <h5>
                  Last Seen:{' '}
                  {new Date(githubData.updated_at).toLocaleDateString() || 'NA'}
                </h5>
              </div>
              <div className="column">
                <h5>Public Repo: {githubData.public_repos || 'NA'}</h5>
                <h5>Gits: {githubData.public_gists || 'NA'}</h5>

                <h5>
                  Last Week: {githubRepoData && getWeekDiff(githubRepoData)}{' '}
                  (Repo updated)
                </h5>
              </div>
            </div>
            <div className="platform-data-view">
              <div className="lists">
                {githubRepoData.slice(0, 3).map((item, index) => {
                  return <GithubRepoInfo key={index} data={item} />;
                })}
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.github.com/${githubData.login}`}
              >
                View All
              </a>
            </div>
          </div>
        ) : (
          <h1 className="loading">Loading</h1>
        )}

        <h3 className="title">CodeChef Details</h3>
        {codingData.user_details ? (
          <div className="platform-details">
            <a
              href={`https://www.codechef.com/users${codingData.user_details.username}`}
            >
              CodeChef Id: {codingData.user_details.username}
            </a>

            <div className="platform-detail-header">
              <div className="column">
                <h5>Stars: {codingData.stars}</h5>
                <h5>Rating: {codingData.rating}</h5>
                <h5>Highest Rating: {codingData.highest_rating}</h5>
                <h5>Total Contests: {codingData.contest_ratings.length}</h5>
              </div>
              <div className="column">
                <h5>Global Rank: {codingData.global_rank}</h5>
                <h5>Country Rank: {codingData.country_rank}</h5>
                <h5>
                  Problems: {codingData.fully_solved.count} (fully solved){' '}
                  {codingData.partially_solved.count} (partially solved)
                </h5>
              </div>
            </div>
            <div className="contest-list">
              {codingData.contests.map((item, index) => {
                return <ContestsRatingInfo key={index} data={item} />;
              })}
            </div>
            <div className="platform-data-view">
              <div className="lists">
                {codingData.contest_ratings.slice(0, 3).map((item, index) => {
                  return <ContestsInfo key={index} data={item} />;
                })}
              </div>
            </div>
          </div>
        ) : (
          <h1 className="loading">Loading...</h1>
        )}

        <div className="tasks"></div>
        <div className="projects"></div>
      </div>
    </div>
  );
}

export default ProfileDetailView;

const GithubRepoInfo = ({ data }) => {
  const [lastWeekCommits, setLastWeekCommits] = useState(0);

  useEffect(() => {
    const initialLoad = async () => {
      await GithubApi.getLatestCommits(data.owner.login, data.name)
        .then((res) => {
          if (res.type === 'success') {
            setLastWeekCommits(res.data[res.data.length - 2].total);
          } else throw res;
        })
        .catch((err) => {
          CreateNotifications('error', err.message);
        });
    };
    initialLoad();
  }, [data]);
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.github.com/${data.full_name}`}
      >
        {data.name}
      </a>
      <p>{data.description ? data.description : 'Not available'}</p>
      <h4 className="lang">
        Language: <span>{data.language ? data.language : 'NA'}</span>
      </h4>
      <h5>Last worked on: {new Date(data.updated_at).toLocaleDateString()}</h5>
      <h5>Last week commit: {lastWeekCommits}</h5>
    </div>
  );
};

const ContestsRatingInfo = ({ data }) => {
  return (
    <div className="contest-info">
      <h3>{data.name}</h3>
      <h5>Rating: {data.rating}</h5>
    </div>
  );
};

const ContestsInfo = ({ data }) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <h5>Rating: {data.rating}</h5>
      <h5>Rank: {data.rank}</h5>
      <h5>Penalised: {data.penalised_in ? data.penalised_in : 'NA'}</h5>
    </div>
  );
};
