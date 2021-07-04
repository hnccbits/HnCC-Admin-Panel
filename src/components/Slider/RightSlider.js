import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';
import { MdNotificationsActive } from 'react-icons/md';

function RightSlider() {
  const [goBottom, setGoBottom] = useState(false);
  const [data, setData] = useState({});
  const [githubMember, setGithubMember] = useState(0);
  const [latest, setLatest] = useState({});

  useEffect(() => {
    test();
    test1();
    test2();
  }, []);

  const test = async () => {
    try {
      const response = await fetch('https://api.github.com/orgs/hnccbits');

      if (response.status !== 200) throw 'Something went wrong';
      else {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const test1 = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/orgs/hnccbits/members'
      );

      if (response.status !== 200) throw 'Something went wrong';
      else {
        const data = await response.json();
        setGithubMember(data.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const test2 = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/orgs/hnccbits/repos?per_page=100&sort=created'
      );

      if (response.status !== 200) throw 'Something went wrong';
      else {
        const data = await response.json();
        setLatest(data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
                  <h3>{data.public_repos}</h3>
                  <p>Repositories</p>
                </div>
                <div className="detailBox">
                  <h3>{data.public_gists}</h3>
                  <p>Gists</p>
                </div>
              </div>
              <div className="detailRow">
                <div className="detailBox">
                  <h3>{githubMember}</h3>
                  <p>Members</p>
                </div>
                <div className="detailBox">
                  <h3>{data.followers}</h3>
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
            <div className="card">
              <h3>{latest.name}</h3>
              <p style={{ fontSize: '14px', color: 'ccd', margin: '0.8rem 0' }}>
                {latest.description}
              </p>
              <p> Open Issues: {latest.open_issues}</p>
              <h6>
                Created at: {new Date(latest.created_at).toLocaleDateString()}
              </h6>
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
