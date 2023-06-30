import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRainStatus } from "../../store/slice/rainSlice";
import ReactAudioPlayer from "react-audio-player";

import "./styles.scss";

const RainToggleButton = () => {
  const dispatch = useDispatch();
  const rain = useSelector((state) => state.rain);
  const { rainMode, rainValue } = rain;

  const [buttonClick, setButtonClick] = useState(false);

  const rainButtonHandler = () => {
    if (rainValue === 0)
      dispatch(changeRainStatus({ currentStatus: rainMode, value: 30 }));
    else dispatch(changeRainStatus({ currentStatus: rainMode, value: 0 }));
    setButtonClick(!buttonClick);
  };

  return (
    <div className='wrapper'>
      {buttonClick && (
        <ReactAudioPlayer
          preload='auto'
          autoPlay
          src='./assets/musics/rain_city.mp3'
          loop
          volume={rainValue / 100}
        />
      )}
      <div
        className='button'
        onClick={rainButtonHandler}
        // onMouseOver={}
        // onMouseOut={MouseOut}
      >
        <div className='icon'>
          <i className='fas fa-cloud-rain'></i>
        </div>
      </div>
    </div>
  );
};

export default RainToggleButton;
