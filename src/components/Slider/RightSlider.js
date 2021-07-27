import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';
import { MdNotificationsActive } from 'react-icons/md';
import GithubApi from '../../api/GithubApi';
import { Link } from 'react-router-dom';
import CreateNotifications from '../config/Notifications';

function RightSlider() {
  const [goBottom, setGoBottom] = useState(false);
  const [githubData, setGtihubData] = useState({});
  const [githubMemberCount, setGithubMemberCount] = useState(0);
  const [latestRepo, setLatestRepo] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    const initialLoad = async () => {
      await GithubApi.getOrgInfo()
        .then((res) => {
          if (res.type === 'success') {
            if (isSubscribed) {
              setGtihubData(res.data);
            }
          } else throw res;
        })
        .catch((err) => {
          CreateNotifications('error', err.message);
        });

      await GithubApi.getOrgMemberInfo()
        .then((res) => {
          if (res.type === 'success') {
            if (isSubscribed) {
              setGithubMemberCount(res.data.length);
            }
          } else throw res;
        })
        .catch((err) => {
          CreateNotifications('error', err.message);
        });

      await GithubApi.getOrgRepoInfo()
        .then((res) => {
          if (res.type === 'success') {
            if (isSubscribed) {
              setLatestRepo(res.data);
            }
          } else throw res;
        })
        .catch((err) => {
          CreateNotifications('error', err.message);
        });
    };
    initialLoad();
  }, []);

  return (
    <>
      <section className="logout">
        <Link to="/logout">Logout</Link>
      </section>
      {goBottom && (
        <div className="sliderOpener" onClick={() => setGoBottom(false)}>
          <IoIosArrowUp />
        </div>
      )}
      <div style={goBottom ? styles.goBottom : {}} className="rightSlider">
        <div onClick={() => setGoBottom(true)}>
          <IoIosArrowDown />
        </div>
        <div className="element">
          <div className="header">
            <h2>Hackathon and Coding Club, BIT Sindri</h2>
            <h5>hnccbits@gmail.com</h5>
          </div>
          <div className="github">
            <div className="logo">
              <AiFillGithub size={50} />
              <p>Github</p>
            </div>
            <div className="details">
              <div className="detailRow">
                <div className="detailBox">
                  <h3>{githubData.public_repos}</h3>
                  <p>Repositories</p>
                </div>
                <div className="detailBox">
                  <h3>{githubData.public_gists}</h3>
                  <p>Gists</p>
                </div>
              </div>
              <div className="detailRow">
                <div className="detailBox">
                  <h3>{githubMemberCount}</h3>
                  <p>Members</p>
                </div>
                <div className="detailBox">
                  <h3>{githubData.followers}</h3>
                  <p>Followers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="logo">
              <BiNetworkChart size={50} />
              <p>Socials</p>
            </div>
            <div className="details">
              <div className="detailRow">
                <div className="detailBox">
                  <h3>20</h3>
                  <p>LinkedIn</p>
                </div>
                <div className="detailBox">
                  <h3>20</h3>
                  <p>Facebook</p>
                </div>
              </div>
              <div className="detailRow">
                <div className="detailBox">
                  <h3>20</h3>
                  <p>Instagram</p>
                </div>
                <div className="detailBox">
                  <h3>20</h3>
                  <p>Twitter</p>
                </div>
              </div>
            </div>
          </div>
          <div className="notifications">
            <div className="logo">
              <MdNotificationsActive size={30} />
              <p>Latest Project</p>
            </div>
            <div className="columns">
              {latestRepo.map((item, index) => {
                return (
                  <div key={index} className="card">
                    <h3>{item.name}</h3>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'ccd',
                        margin: '0.8rem 0',
                      }}
                    >
                      {item.description}
                    </p>
                    <p> Open Issues: {item.open_issues}</p>
                    <h6>
                      Created at:{' '}
                      {new Date(item.created_at).toLocaleDateString()}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  goBottom: {
    height: 0,
    padding: 0,
  },
};

export default RightSlider;
