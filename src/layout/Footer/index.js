import React, { useState } from 'react';

import { chill, jazzy, sleep } from '../../data/songData';
import { useSelector } from 'react-redux';
import './styles.scss';
import Player from '../../components/Player'

const Footer = () => {
  const data = useSelector((state) => state.mood);

  const { moodMode } = data;

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className='footer'>
      <div className='author'>
        {/* <span>Made by Phuc Le, inspired by Lofi.co</span> */}
        {moodMode === 'chill' ? (
          <span>Song name: {chill[currentSongIndex].name}</span>
        ) : moodMode === 'jazzy' ? (
          <span>Song name: {jazzy[currentSongIndex].name}</span>
        ) : (
          <span>Song name: {sleep[currentSongIndex].name}</span>
        )}
      </div>
      <div className='controller'>
        {moodMode === 'chill' ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={chill}
          />
        ) : moodMode === 'jazzy' ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={jazzy}
          />
        ) : (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={sleep}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
