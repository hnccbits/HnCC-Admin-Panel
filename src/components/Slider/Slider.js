import React from 'react';
import { useHistory } from 'react-router-dom';

import { MdEventNote } from 'react-icons/md';
import { RiAccountPinBoxLine } from 'react-icons/ri';
import { SiGooglehangoutsmeet, SiHomeassistant } from 'react-icons/si';

import Image from '../../assets/images/hncc.svg';

function Slider() {
  const history = useHistory();
  return (
    <div className="slider">
      <div className="content">
        <div className="header">
          <img src={Image} alt="HnCC" />
          <h3>HnCC Admin Panel</h3>
        </div>
        <div className="body">
          <div onClick={() => history.push('/home')} className="element">
            <SiHomeassistant size={50} />
            <h5>Home</h5>
          </div>
          <div onClick={() => history.push('/members')} className="element">
            <RiAccountPinBoxLine size={50} />
            <h5>Member</h5>
          </div>
          <div onClick={() => history.push('/meet')} className="element">
            <SiGooglehangoutsmeet size={50} />
            <h5>Meets</h5>
          </div>
          <div onClick={() => history.push('/events')} className="element">
            <MdEventNote size={50} />
            <h5>Events</h5>
          </div>
        </div>
        <div className="footer">
          <h3>HnCC Admin Portal</h3>
          <h5>Version v1.0.0</h5>
        </div>
      </div>
    </div>
  );
}

export default Slider;
