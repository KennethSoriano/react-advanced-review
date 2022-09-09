import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('hey')

  const handleClick = () => {
    setText('bye');
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
