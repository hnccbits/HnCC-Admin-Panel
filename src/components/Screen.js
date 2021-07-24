import React from 'react';
import { useLocation } from 'react-router';
import RightSlider from './Slider/RightSlider';
import Slider from './Slider/Slider';

function Screen({ children }) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/login' ? (
        <div className="wrapper">{children}</div>
      ) : (
        <>
          <RightSlider />
          <div className="wrapper">{children}</div>
          <Slider />
        </>
      )}
    </>
  );
}

export default Screen;
