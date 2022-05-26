import React from 'react';
import { Link } from 'react-router-dom';
import Error from '.././error.jpg'


const error = () => {
  return (
    <div>
      <div className='mt-24'>
        You are in wrong place please go to Home
        <img src={Error} alt="" />
      </div>
    </div>
  );
};

export default error;