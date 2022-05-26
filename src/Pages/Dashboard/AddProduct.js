import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';


const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const { data: service, isLoading } = useQuery("tools", () => fetch("http://localhost:5000/tools").then(res => res.json()));

  const imageStorageKey = '3a1e59ad1d3a8caba2efe37f45b560e9';

  if (isLoading) {
    return <Loading></Loading>
  }

  const onSubmit = async data => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(result => {

        if (result.success) {
          const img = result.data.url;
          const tools = {
            name: data.name,
            short: data.short,
            image: img,
            minQuantity: data.minQuantity,
            availableQuantity: data.availableQuantity,
            price: data.price
          }
          fetch('http://localhost:5000/tools', {
            method: "POST",
            headers: {
              'content-type': 'application/json; charset=UTF-8',
              'authorization': `Bearer, ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(tools),
          })
            .then(res => res.json())
            .then(insered => {
              console.log(insered);
              toast.success("Your product Added")
              reset()
            }
            )

        }
      }
      )

  }



  return (
    <div>
      <h2 className='text-3xl'>ADD a Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Name</span>

          </label>
          <input type="text"
            placeholder="Product Name Here"
            className="input  input-bordered input-info w-full "
            {...register("name", {
              required: {
                value: true,
                message: "Product Name is required"
              }
            })} />

          <label className="label">
            <span className="label-text">Short Discription</span>

          </label>
          <input type="text"
            placeholder="Short Discription Here"
            className="input input input-bordered input-info w-full "
            {...register("short", {
              required: {
                value: true,
                message: "Short Discription is required"
              },

            })} />
          <label className="label">
            <span className="label-text">Mininmum Quantity</span>

          </label>

          <input type="number"
            placeholder="Mininmum Quantity Here"
            className="input input input-bordered input-info w-full "
            {...register("minQuantity", {
              required: {
                value: true,
                message: "Mininmum Quantity is required"
              },

            })} />
          <label className="label">
            <span className="label-text">Available Quantity</span>

          </label>

          <input type="number"
            placeholder="Available Quantity Here"
            className="input input input-bordered input-info w-full "
            {...register("availableQuantity", {
              required: {
                value: true,
                message: "Available Quantity is required"
              },

            })} />
          <label className="label">
            <span className="label-text">Price</span>

          </label>

          <input type="number"
            placeholder="Price Here"
            className="input input input-bordered input-info w-full "
            {...register("price", {
              required: {
                value: true,
                message: "Price is required"
              },

            })} />



        </div>

        <input type="file"
          placeholder="Choose File Here"
          className="mt-5 items-center max-w-xs"
          {...register("image", {
            required: {

              value: true,
              message: "image is required"
            },

          })} />

        <input type="submit" className='btn btn-primary w-full mt-5 text-white' value={"Add Product"} />
      </form>
    </div>
  );
};

export default AddProduct;