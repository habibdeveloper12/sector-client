import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import Checkout from '../Purchase/Checkout';

const Tools = () => {
  const { isLoading, error, data: tools } = useQuery('tools', () =>

    fetch('http://localhost:5000/tools', {
      headers: {
        'authorization': `Bearer, ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json()))
  if (isLoading) {
    return <Loading></Loading>
  }


  return (
    <div>
      <h1 className='text-5xl font-bold text-secondary  mb-5'>Our Tools</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {
          tools.map(data => <>
            <div class="card w-96 bg-base-100 shadow-xl text-left">
              <figure><img className='h-48' src={data.image} alt={data.name} /></figure>
              <div class="card-body">
                <h2 class="card-title">{data.name}</h2>
                <p>{data.short}</p>
                <div className='flex justify-center items-center'>
                  <p>min Quantity:{data.minQuantity}</p>
                  <p>Available Quantity :{data.availableQuantity}</p>
                </div>
                <p>Price:${data.price}</p>
                <div class="card-actions justify-end">
                  <div class="indicator">
                    <span class="indicator-item badge badge-secondary">${data.price}</span>
                    <Link to={`/checkout/${data._id}`}><button class="btn btn-primary">Purchase Now</button></Link>
                  </div>

                </div>
              </div>
            </div>

          </>)
        }
      </div>

    </div>
  );
};

export default Tools;