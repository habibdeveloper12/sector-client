import React from 'react';

const Twosection = () => {
  return (
    <div>
      <div className='mt-10'>
        <h1 className='text-5xl text-primary font-bold'>Our Selling Progress </h1>
        <p className='text-xl p-5'>We providing a Latest Holiday Offer fo selling our tools .Your Are welcome to perticipate to our Offer and get huge Gifts</p>
        <div className='w-full'>

          <progress class="progress progress-primary w-80" value="0" max="100"></progress><br />
          <progress class="progress progress-primary w-80" value="10" max="100"></progress><br />
          <progress class="progress progress-primary w-80" value="40" max="100"></progress><br />
          <progress class="progress progress-primary w-80" value="70" max="100"></progress><br />
          <progress class="progress progress-primary w-80" value="100" max="100"></progress><br />
        </div>
      </div>
      <div className='mt-10 shadow shadow-lg shadow-2xl flex flex-col lg:flex-row gap-40 m-auto items-center justify-center py-10 '>
        <div>
          <h1 className='text-4xl text-secondary font-bold'>Have Any Question About Product or Request </h1>
          <p className='text-xl text-gray-600'>Dont Hasitate to contact Us</p>
        </div>
        <div className=''>
          <button className='mx-3 btn  btn-primary'>Request for Qoute</button>
          <button className='btn  btn-secondary'>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Twosection;