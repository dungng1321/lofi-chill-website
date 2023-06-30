import React, { useState } from "react";

import "./styles.scss";
import { useSelector } from "react-redux";
import ModifierBoard from "../../components/ModifierBoard";
import RainToggleButton from "../../components/RainToggleButton";

import Footer from "../../layout/Footer"
import { useTimer } from "react-timer-hook";

const Home = () => {
  const [timerStart, setTimerStart] = useState(false);

  const daynight = useSelector((state) => state.mode);
  const rain = useSelector((state) => state.rain);

  const { mode } = daynight;
  const { rainMode } = rain;

  const combineMode = `${mode}-${rainMode}`;

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 0);

  const { seconds, minutes, hours, isRunning, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => setTimerStart(false),
    });

  const setTimerHandler = (hour, minute, second) => {
    const time = new Date();
    const setupTimer =
      Number(hour) * 3600 + Number(second) + Number(minute) * 60;
    time.setSeconds(time.getSeconds() + setupTimer);
    restart(time);
  };

  return (
    <>
      {/* Embedded the background video base on each state */}
      {/* Night */}
      <video
        className={combineMode === "night-clear" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Night-clear.mp4' type='video/mp4' />
      </video>
      <video
        className={combineMode === "night-rain" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Night-rainny.mp4' type='video/mp4' />
      </video>
      {/* Day */}
      <video
        className={combineMode === "day-clear" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Day-sunny.mp4' type='video/mp4' />
      </video>
      <video
        className={combineMode === "day-rain" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Day-rainny.mp4' type='video/mp4' />
      </video>
      <RainToggleButton />
      <ModifierBoard
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        isRunning={isRunning}
        pause={pause}
        resume={resume}
        restart={restart}
        setTimerHandler={setTimerHandler}
        setTimerStart={setTimerStart}
        timerStart={timerStart}
      />
      <Footer />
    </>
  );
};

export default Home;
