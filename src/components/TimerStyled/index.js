import React from 'react';
import './styles.scss';
import Digit from '../Digit';

const TimerStyled = ({ seconds, minutes, hours }) => {
  return (
    <div className='timerContainer'>
      <Digit value={hours} title='HOURS' addSeparator />
      <span className='separatorContainer'>
        <span className='separator' />
        <span className='separator' />
      </span>
      <Digit value={minutes} title='MINUTES' addSeparator />
      <span className='separatorContainer'>
        <span className='separator' />
        <span className='separator' />
      </span>
      <Digit value={seconds} title='SECONDS' />
    </div>
  );
};

export default TimerStyled;
