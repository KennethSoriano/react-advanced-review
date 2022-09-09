import React from 'react';
import { useState } from 'react';


const ErrorExample = () => {
  
  const [title, setTitle] = useState('random title')

  const handleClick = setTitle('change')

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
};

export default ErrorExample;
