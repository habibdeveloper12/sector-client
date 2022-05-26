import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Addreview = () => {
  const [user] = useAuthState(auth)
  const handlereview = (e) => {
    e.preventDefault()
    const review = e.target.review.value;
    const comment = e.target.comment.value;
    const name = user.displayName;
    const email = user.email;
    const makereview = {
      review,
      comment,
      name,
      email
    }
    fetch('http://localhost:5000/review', {
      method: 'POST',
      body: JSON.stringify(makereview),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  }
  return (
    <div>
      <h1 className='text-3xl'>Add Review</h1>

      <form onSubmit={handlereview} action="">
        <select name='review' class="select w-full max-w-xs m-10">
          <option disabled selected>Review Us</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input type="text" placeholder="Type here" name='comment' class="input input-bordered input-lg w-full max-w-xs mb-5" />
        <button type='submit' className='btn btn-primary w-full text-white'>Submit</button>
      </form>
    </div>
  );
};

export default Addreview;