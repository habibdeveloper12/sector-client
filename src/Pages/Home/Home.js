import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Review from './Review';
import Tools from './Tools';
import Twosection from './Twosection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Business></Business>
      <Review></Review>
      <Twosection></Twosection>

    </div>
  );
};

export default Home;