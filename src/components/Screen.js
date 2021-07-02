import React from 'react';
import RightSlider from './Slider/RightSlider';
import Slider from './Slider/Slider';

function Screen({ children }) {
  return (
    <>
      <RightSlider />
      <div className="wrapper">{children}</div>
      <Slider />
    </>
  );
}

export default Screen;
