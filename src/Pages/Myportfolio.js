import React from 'react';

const Myportfolio = () => {
  return (
    <div className='mt-24 h-[100vh]'>
      <h1 className='text-3xl text-bold text-primary'>My Name is Md Habibur Rahman Shuvo</h1>
      <h1 className='text-3xl text-bold text-secondary'>My email : sunrahman19@gmail.com</h1>
      <p className='text-xl text-bold text-accent'>I am a professional web developer .I studying now dhaka University techonology faculty in CSE. <br />
        I have skills:
        1.html
        2.css
        3.Javascript
        4.reactJs
        5.Node Js
        6.Mongo DB


      </p>
      Here is some works Link that i did with react js :
      <ul>
        <li><a href="https://computer-mania-68f0f.web.app/">Computer Site</a>
          <p>This site i used react js and nodejs and mongodb with boostrap technology </p>

        </li>
        <li><a href="https://gym-trainer-bd.web.app/">Gym Site</a></li>
        <p>This site i used react js and nodejs and mongodb with boostrap technology </p>
        <li> <a href="https://meek-lokum-d499ee.netlify.app//">PC Site</a></li>
        <p>This site i used react js and nodejs and mongodb with boostrap technology </p>
      </ul>

    </div>
  );
};

export default Myportfolio;