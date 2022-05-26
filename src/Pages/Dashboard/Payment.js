import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const stripePromise = loadStripe('pk_test_51L1aStLPuz8KfNo1cJbijbXDiiEzbd4aSzzxXGXVyx5onnrUyPgxM7F1o8wcKEj9AsUiqErylJ9KkmEahCoqDKPs00v3wNR5zy');

const Payment = () => {
  const [user] = useAuthState(auth)
  const { id } = useParams()
  console.log(id);

  const { isLoading, data } = useQuery(['payment', id], () =>
    fetch(`http://localhost:5000/payment/${id}`, {
      method: "GET",
      headers: {
        'authorization': `Bearer, ${localStorage.getItem('accessToken')}`
      },
    }).then(res => res.json())
  )
  console.log(data);

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div className='card-body'>
              <h1 class="text-2xl font-bold">Hey {user.displayName}</h1>
              <p class="text-xl ">{data.address}</p>
              <p class="text-xl ">{data.email}</p>


            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center">{data.name}</h2>
              <img src={data.image} alt="" />
              <p className='font-bold text-3xl'>
                ${data.price}</p>

            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm data={data} />
            </Elements>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;