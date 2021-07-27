import React from 'react';
import { useLocation } from 'react-router';
import RightSlider from './Slider/RightSlider';
import Slider from './Slider/Slider';

function Screen({ children }) {
  const location = useLocation();

  console.log(location);

  return (
    <>
      {location.pathname === '/login' || location.pathname === '/register' ? (
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
