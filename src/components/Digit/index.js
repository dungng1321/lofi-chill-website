import React from 'react';
import './styles.scss';

const Digit = ({ value, title }) => {
  const leftDigit = value >= 10 ? value.toString()[0] : '0';
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
  return (
    <div className='containerWrap'>
      <span className='title'>{title}</span>
      <div className='digitContainer'>
        <span className='singleDigit'>{leftDigit}</span>
        <span className='singleDigit'>{rightDigit}</span>
      </div>
    </div>
  );
};

export default Digit;
