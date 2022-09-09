import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  const decrease = () => {
    setValue(value - 1)
  }

  const increase = () => {
    setValue((prevState) => {
      return prevState + 1
    })
  }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue(value + 1);
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '4rem 0'}}>
        <h1>Regular Counter</h1>
        <h1>{value}</h1>
        <button className='btn' onClick={decrease}>decrease</button>
        <button className='btn' onClick={reset}>reset</button>
        <button className='btn' onClick={increase}>increase</button>
      </section>


      <section style={{ margin: '4rem 0'}}>
        <h1>More Complex Regular Counter</h1>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>increase later</button>
      </section>

    </>
  )
};

export default UseStateCounter;
