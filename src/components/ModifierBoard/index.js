import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./styles.scss";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { changeMoodStatus } from "../../store/slice/moodSlice";

import ReactAudioPlayer from "react-audio-player";
import { changeRainStatus } from "../../store/slice/rainSlice";
import { changeVolume } from "../../store/slice/changeVolumeSlice";
import CountDownTimer from "../CountDownTimer";
import TodoList from "../TodoList";

const ModifierBoard = ({
  seconds,
  minutes,
  hours,
  isRunning,
  pause,
  resume,
  restart,
  setTimerHandler,
  setTimerStart,
  timerStart,
}) => {
  const dispatch = useDispatch();
  const moodData = useSelector((state) => state.mood);
  const rainData = useSelector((state) => state.rain);
  const volumeData = useSelector((state) => state.volume);

  const { rainValue } = rainData;
  const { moodMode } = moodData
  const { volumeValue } = volumeData;

  const [openMood, setOpenMood] = useState(false);
  const [openFocus, setOpenFocus] = useState(false);

  const [cityTraffic, setCityTraffic] = useState(0);
  const [cityRain, setCityRain] = useState(rainValue);
  const [fireplace, setFireplace] = useState(0);
  const [snow, setSnow] = useState(0);
  const [summerStorm, setSummerStorm] = useState(0);
  const [fan, setFan] = useState(0);
  const [forestNight, setForestNight] = useState(0);
  const [wave, setWave] = useState(0);
  const [wind, setWind] = useState(0);
  const [people, setPeople] = useState(0);
  const [river, setRiver] = useState(0);
  const [rainForest, setRainForest] = useState(0);

  const rainSliderHandler = (e) => {
    const { value } = e.target;
    if (value > 0) {
      dispatch(changeRainStatus({ currentStatus: "clear", value: cityRain }));
    } else if (value === 0) {
      dispatch(changeRainStatus({ currentStatus: "rain", value: 0 }));
    }
    setCityRain(value);
  };
  const openFocusHandler = () => {
    setOpenFocus(!openFocus);
    setOpenMood(false);
  };

  const openMoodHandler = () => {
    setOpenMood(!openMood);
    setOpenFocus(false);
  };

  const changeMoodHandler = (e) => {
    dispatch(changeMoodStatus(e.target.id));
  };

  const changeVolumeHandler = (e) => {
    dispatch(changeVolume(e.target.value));
  };

  return (
    <>
      {!openMood && (
        <div>
          <ReactAudioPlayer
            preload='auto'
            autoPlay
            src='./assets/musics/city_traffic.mp3'
            loop
            volume={cityTraffic / 100}
          />

          <ReactAudioPlayer
            preload='auto'
            autoPlay
            src='./assets/musics/fireplace.mp3'
            loop
            volume={fireplace / 100}
          />

          <ReactAudioPlayer
            preload='auto'
            autoPlay
            src='./assets/musics/rain_city.mp3'
            loop
            volume={rainValue / 100}
          />
        </div>
      )}
      <div
        className={
          `modifier ` + (openMood && "mood ") + (openFocus && " focus ")
        }
      >
        <div className='modifier__icon'>
          <div className={`icon ` + (openMood && "active")}>
            <i onClick={openMoodHandler} className='fas fa-sliders-h fa-2x'></i>
          </div>
          {openMood && (
            <div className='modifierBox'>
              <h4>Mood</h4>
              <div className='options'>
                <div
                  id='sleep'
                  onClick={changeMoodHandler}
                  className={`item ` + (moodMode === "sleep" ? "active" : "")}
                >
                  <i id='sleep' className='fas fa-moon fa-2x'></i>
                  <span id='sleep'>Sleep</span>
                </div>
                <div
                  id='jazzy'
                  onClick={changeMoodHandler}
                  className={`item ` + (moodMode === "jazzy" ? "active" : "")}
                >
                  <i id='jazzy' className='fas fa-guitar fa-2x'></i>
                  <span id='jazzy'>Jazzy</span>
                </div>
                <div
                  id='chill'
                  onClick={changeMoodHandler}
                  className={`item ` + (moodMode === "chill" ? "active" : "")}
                >
                  <i id='chill' className='fas fa-coffee fa-2x'></i>
                  <span id='chill'>Chill</span>
                </div>
              </div>
              <div className='volume'>
                <Stack
                  spacing={2}
                  direction='row'
                  sx={{ mb: 1 }}
                  alignItems='center'
                >
                  <i className='fas fa-volume-down fa-lg'></i>
                  <Slider
                    className='volume-slider'
                    value={volumeValue}
                    onChange={changeVolumeHandler}
                  />
                  <i className='fas fa-volume-up fa-lg'></i>
                </Stack>
              </div>
              <h5>Background Noise</h5>
              <div className='backgroundNoise'>
                <div className='noise-option'>
                  <p>City traffic</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/city_traffic.mp3'
                    loop
                    volume={cityTraffic / 100}
                  />
                  <Slider
                    className='slider'
                    value={cityTraffic}
                    onChange={(e) => setCityTraffic(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>City rain</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/rain_city.mp3'
                    loop
                    volume={rainValue / 100}
                  />
                  <Slider
                    className='slider'
                    value={rainValue}
                    onChange={rainSliderHandler}
                  />
                </div>
                <div className='noise-option'>
                  <p>Fireplace</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/fireplace.mp3'
                    loop
                    volume={fireplace / 100}
                  />
                  <Slider
                    className='slider'
                    value={fireplace}
                    onChange={(e) => setFireplace(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Snow</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/snow.mp3'
                    loop
                    volume={snow / 100}
                  />
                  <Slider
                    className='slider'
                    value={snow}
                    onChange={(e) => setSnow(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Summer Storm</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/summer_storm.mp3'
                    loop
                    volume={summerStorm / 100}
                  />
                  <Slider
                    className='slider'
                    value={summerStorm}
                    onChange={(e) => setSummerStorm(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Fan</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/fan.mp3'
                    loop
                    volume={fan / 100}
                  />
                  <Slider
                    className='slider'
                    value={fan}
                    onChange={(e) => setFan(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Forest Night</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/forest_night.mp3'
                    loop
                    volume={forestNight / 100}
                  />
                  <Slider
                    className='slider'
                    value={forestNight}
                    onChange={(e) => setForestNight(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Wave</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/waves.mp3'
                    loop
                    volume={wave / 100}
                  />
                  <Slider
                    className='slider'
                    value={wave}
                    onChange={(e) => setWave(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Wind</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/wind.mp3'
                    loop
                    volume={wind / 100}
                  />
                  <Slider
                    className='slider'
                    value={wind}
                    onChange={(e) => setWind(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>People</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/people_talk_inside.mp3'
                    loop
                    volume={people / 100}
                  />
                  <Slider
                    className='slider'
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>River</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/river.mp3'
                    loop
                    volume={river / 100}
                  />
                  <Slider
                    className='slider'
                    value={river}
                    onChange={(e) => setRiver(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Rain Forest</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/rain_forest.mp3'
                    loop
                    volume={rainForest / 100}
                  />
                  <Slider
                    className='slider'
                    value={rainForest}
                    onChange={(e) => setRainForest(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='modifier__icon'>
          <div className={"icon " + (openFocus && "active")}>
            <i
              onClick={openFocusHandler}
              className='fas fa-book-reader fa-2x'
            ></i>
          </div>
        </div>
        {openFocus && (
          <div className='modifierBox'>
            <h4>Focus Mode</h4>
            <CountDownTimer
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
            <h4>To do list</h4>
            <TodoList />
          </div>
        )}
      </div>
    </>
  );
};

export default ModifierBoard;
