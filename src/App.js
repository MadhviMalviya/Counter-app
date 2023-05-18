
import "./style.css";

import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementByTen = () => {
    setCount(count + 10);
  };

  const decrementByTen = () => {
    setCount(count - 10);
  };

  return (
      <>
     <div  className='m' >  <h1>Counter App</h1></div>

     <div className='main' >
      <div>
      <div className='f'  >
        <div className='upbtn' onClick={increment}></div><br/>
        </div>
        <div className='h'>
        <div  className='left' onClick={incrementByTen}></div>
      <div className='midbox' >  <h1>{count}</h1></div>
        <div className='right' onClick={decrementByTen}></div><br/>
        </div>
        <div  className='f' >
        <div className='downbtn' onClick={decrement}></div>
      </div> 
       </div>
    
    </div></>
  );
}

export default CounterApp;

