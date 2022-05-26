import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';


const Checkout = ({ purchase }) => {
  const id = useParams()



  const [user, loading, error] = useAuthState(auth);
  const [value, setValue] = useState()
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { isLoading, data: item } = useQuery('item', () =>
    fetch(`http://localhost:5000/tools/${id.id}`, {
      method: "GET",
      headers: {
        'authorization': `Bearer, ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json()))

  console.log(value);
  if (isLoading) {
    return <Loading></Loading>
  }

  console.log(item);


  const onSubmit = async (data) => {
    console.log(data);

    const name = item.name;
    const address = data.address;
    const phone = data.phone;
    const email = user.email;
    const quantity = data.quantity;
    const image = item.image;
    const price = item.price;

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      body: JSON.stringify({
        name,
        address,
        phone,
        email,
        image,
        price,
        quantity
      }),
      headers: {

        'Content-type': 'application/json; charset=UTF-8',
        'authorization': `Bearer, ${localStorage.getItem('accessToken')}`

      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast("order is placed go to my order")
      });

  }
  return (
    <div>

      <div style={{ width: '100%' }} className="hero-content flex flex-col lg:flex-row">
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img src={item.image} class="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 class="text-5xl font-bold">{item.name}</h1>
              <p class="py-6">{item.short}</p>
              <h5 className='text-3xl'>Price:
                ${item.price}</h5>

            </div>
          </div>
        </div>

        <div className="card w-full max-w-md shadow-2xl bg-base-100 mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                {...register("name")}

                className="input input-bordered" defaultValue={item.name} disabled />

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                className="input input-bordered" value={user.email} type='email' disabled />

              <p className='text-red-500 mt-2 ml-2' >{errors.email?.type === 'required' && "Email is required"} </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                {...register("address", { required: true })}
                className="input  border-primary border-1 border-solid " type='text' />

              <p className='text-red-500 mt-2 ml-2' >{errors.address?.type === 'required' && "address is required"} </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                {...register("phone", { required: true })}
                className="input  border-primary border-1 border-solid " type='number' />

              <p className='text-red-500 mt-2 ml-2' >{errors.phone?.type === 'required' && "Phone is required"} </p>
            </div>
            <div className="form-control">

              <div className='flex flex-col lg:flex-row'>
                <p>Minimum Quantity  :{item.minQuantity}</p>
                <p>Available Quantity :{item.availableQuantity}</p>
              </div>
              <p className='font-bold'>Price:
                ${item.price}</p>
            </div>
            {/* <div className="form-control flex flex-row items-center gap-4 justify-center">

              <div className='px-4 py-2 border-2 border-solid border-primary' onClick={handleplus}>+</div>
              <div className='shadow'>{plus}</div>
              <div onClick={handleminus} className='px-4 py-2 border-2 border-solid border-primary' >-</div>
            </div> */}


            <input
              {...register("quantity", {
                required: true, min: {
                  value: item.minQuantity,
                  message: 'please enter atleast minimum value' // JS only: <p>error message</p> TS only support string
                },
                max: {
                  value: item.availableQuantity,
                  message: 'please enter atleast maximum value' // JS only: <p>error message</p> TS only support string
                }
              })}
              className="input  border-primary border-1 border-solid " type='number' defaultValue={item.minQuantity} onChange={e => setValue(e.target.value)} />

            <p className='text-red-500 mt-2 ml-2' >{errors.quantity?.type === 'required' && "quantity is required"} </p>
            <p className='text-red-500 mt-2 ml-2' >{errors.quantity?.type === 'max' && "quantity is required"} </p>
            <p className='text-red-500 mt-2 ml-2' >{errors.quantity?.type === 'min' && "quantity is required"} </p>




            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Order Now</button>
            </div>


          </form>

        </div>
      </div>
    </div>


  )
}

export default Checkout