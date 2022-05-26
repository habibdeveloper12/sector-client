import React from 'react';
import './buisness.css'
const Business = () => {
  return (
    <div className='mt-10 container m-auto'>
      <h1 className='text-5xl font-bold text-secondary mt-5'>Business Summary</h1>
      <p className='text-xl'>we served 100+ customers, 120M+ Annual revenue, 33K+ Reviews, 50+ tools, etc.</p>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-40 shadow text-secondary mt-10 shadow-2xl'>
        <div><img src="buisness (4).svg" className='svg-home text-primary w-48 h-48' alt="" /><h1 className='text-4xl font-bold shadow-xl text'>100+ Customer</h1></div>
        <div><img src="buisness (3).svg" className='svg-home text-primary w-48 h-48' alt="" /><h1 className='text-4xl font-bold shadow-xl text'>120k+ Revenue</h1></div>
        <div><img src="buisness (2).svg" className='svg-home text-primary w-48 h-48' alt="" /><h1 className='text-4xl font-bold shadow-xl text'>500+ Review</h1></div>
        <div><img src="buisness (1).svg" className='svg-home text-primary w-48 h-48' alt="" /><h1 className='text-4xl font-bold shadow-xl text'>250+ Tools</h1></div>
      </div>
    </div>
  );
};

export default Business;