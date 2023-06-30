import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {changeDayNight} from '../../store/slice/modeSlice';
import "./styles.scss";
import { Link } from "react-router-dom";
import DarkLightSwitch from "../../components/DarkLightSwitch";


const Header = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const daynight = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const { mode } = daynight;


  const daynightHandler = () => {
    dispatch(changeDayNight(mode));
  };

  const fullscreenHandler = () => {
    if (!fullscreen) {
      setFullscreen(true);
      const e = document.documentElement;
      e.requestFullscreen();
    } else {
      setFullscreen(false);
      if (!document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  return (
    <nav className='wrap'>
      <Link to='/'>
        <img src='/assets/icons/lofi-logo.gif' alt='' />
      </Link>
      <div className='nav-menu'>
      </div>
      <div className='nav-menu'>
      <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/dungng1321/Lofi-chill-website'
        >
          <i className='fab fa-github'></i>
          <span>GitHub</span>
        </a>
        <div onClick={daynightHandler}>
          <DarkLightSwitch theme={mode} />
        </div>

        <button onClick={fullscreenHandler} className='fullscreen-btn'>
          <i className='fas fa-expand fa-lg'></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
