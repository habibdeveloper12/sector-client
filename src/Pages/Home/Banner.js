import React from 'react';
import './banner.css'
const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="3.jpg" class="w-80 rounded-lg shadow-2xl " />
          <div className='text-left p-6'>
            <h1 class="text-5xl font-bold typewriter">Best Electrical Tool is Here !</h1>
            <p class="py-6">we are manufacturing company we providing electrical and mechanical tools . We providing  Pliers, Screwdrivers
              ,Tape Measure
              ,Electric Drill
              ,Level
              ,Wire Strippers
              , Fish Tape
              ,Voltage Tester.</p>
            <button type="button" class="btn border-none bg-gradient-to-r from-cyan-500 to-blue-500 ">
              Get Started
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;