import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';

const Review = () => {
  const [review, setReview] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/review', {
      headers: {
        'authorization': `Bearer, ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => setReview(data))
  }, [])
  return (
    <div className='container mx-auto mt-10'>
      <h1 className='text-5xl text-secondary font-bold'>Our Review</h1>
      <div className='gird gird-col lg:gird-cols-3'>
        {
          review.map(data => <div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">Review Star:{data.review}</h2>
                <p className=' text-left'>{data.comment}</p>
                <div class="card-actions justify-start">
                  <h3 className='text-2xl font-medium'>{data.name}</h3>
                </div>
              </div>
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Review;