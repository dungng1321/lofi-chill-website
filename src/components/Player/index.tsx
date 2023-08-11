import { useState, useRef, useEffect } from "react";
import "./styles.scss";
import { RootState, useAppSelector } from "../../store/store";

export interface IPlayerProps {
  currentSongIndex: number;
  setCurrentSongIndex: any;
  songs: any;
}

const Player = ({
  currentSongIndex,
  setCurrentSongIndex,
  songs,
}: IPlayerProps) => {
  const data = useAppSelector((state: RootState) => state.volume);

  const { volumeValue } = data;

  const audioElement = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
    audioElement.current.volume = volumeValue / 100;
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };
  return (
    <div className='music-player'>
      <audio loop src={songs[currentSongIndex].src} ref={audioElement}></audio>
      <div className='music-player--controls'>
        <button className='skip-btn' onClick={() => SkipSong(false)}>
          <img src='/assets/icons/prev.svg' alt='' />
        </button>
        <button className='play-btn' onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <img src='/assets/icons/pause.svg' alt='' />
          ) : (
            <img src='/assets/icons/play.svg' alt='' />
          )}
        </button>
        <button className='skip-btn' onClick={() => SkipSong()}>
          <img src='/assets/icons/next.svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default Player;
