import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';


const Myprofile = () => {
  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

  const [user] = useAuthState(auth)
  const { register, formState: { errors }, handleSubmit } = useForm();


  const onSubmit = async data => {

    const name = data.name;
    const address = data.address;
    const education = data.education;
    const location = data.location;
    const phone = data.phone;
    const linkedin = data.Linkedin;
    // await sendEmailVerification();

    await updateProfile({ displayName: name, address: address, education: education, phoneNumber: phone, location: location, linkedin: linkedin });
    console.log(user);

    toast('updated profile')
  }



  if (updating) {
    return <Loading></Loading>
  }





  return (
    <div className=''>
      <div className='mx-auto flex items-center justify-center'>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-5xl  justify-center font-bold">Update Profile Now </h2>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Name</span>

                </label>
                <input type="text"
                  placeholder="Name Here"
                  className="input  input-bordered input-info w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: false,
                      message: "Name is required"
                    }
                  })} />
                <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.name.message}</span>}
                </label>
                <label className="label">
                  <span className="label-text">Email</span>

                </label>
                <input type="email"
                  placeholder="Email Here"
                  className="input input input-bordered input-info w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: false,
                      message: "Email is required"
                    },
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please Enter Valid Email' // JS only: <p>error message</p> TS only support string
                    }
                  })} />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span className="label-text-alt  text-red-500">{errors.email.message}</span>}


                </label>
                <label className="label">
                  <span className="label-text">Address</span>

                </label>
                <input type="text"
                  placeholder="Address Here"
                  className="input  input-bordered input-info w-full max-w-xs"
                  {...register("education")} />
                <label className="label">
                  <span className="label-text">Education</span>

                </label>
                <input type="text"
                  placeholder="location Here"
                  className="input  input-bordered input-info w-full max-w-xs"
                  {...register("location")} />
                <label className="label">
                  <span className="label-text">Location (city)</span>

                </label>
                <input type="text"
                  placeholder="Phone Here"
                  className="input  input-bordered input-info w-full max-w-xs"
                  {...register("Location")} />
                <label className="label">
                  <span className="label-text">Phone Here</span>

                </label>
                <input type="number"
                  placeholder="Phone Here"
                  className="input  input-bordered input-info w-full max-w-xs"
                  {...register("phone")} />
                <label className="label">
                  <span className="label-text"> Linkedin profile</span>

                </label>
                <input type="text"
                  placeholder=" Linkedin profile Here"
                  className="input  input-bordered input-info w-full max-w-xs"
                  {...register("Linkedin")} />

              </div>

              <input type="submit" className='btn btn-primary w-full text-white' value={"Update Profile Now"} />
            </form>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Myprofile;