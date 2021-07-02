import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';
import { MdNotificationsActive } from 'react-icons/md';

function RightSlider() {
  const [goBottom, setGoBottom] = useState(false);

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
                  <h3>20</h3>
                  <p>Repositories</p>
                </div>
                <div className="detailBox">
                  <h3>20</h3>
                  <p>Memeber</p>
                </div>
              </div>
              <div className="detailRow">
                <div className="detailBox">
                  <h3>20</h3>
                  <p>Stars</p>
                </div>
                <div className="detailBox">
                  <h3>20</h3>
                  <p>Packages</p>
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
              <p>Upcoming Events</p>
            </div>
            <div className="card">
              <h3>Title</h3>
              <p>Description of the events</p>
              <h6>{new Date().toLocaleDateString()}</h6>
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
