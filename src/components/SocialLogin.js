import React from 'react';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Sociallogin.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import auth from '../firebase.init';
import Loading from './Loading';
import useToken from '../hooks/useToken';

const Sociallogin = () => {
  const [user] = useAuthState(auth)


  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, usergoogle, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, usergithub, loading1, error1] = useSignInWithGithub(auth);
  const [Token, setToken] = useToken(user || usergoogle || usergithub)







  if (Token) {


    navigate(from, { replace: true })
  }
  if (loading || loading1) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div className=' flex  gap-4 justify-center items-center px-4 py-2' >
        <button className="btn-face m-b-20" onClick={() => signInWithGithub()} >
          <img src="" className='me-2' alt="" />
          Github
        </button>

        <button onClick={() => signInWithGoogle()} className="btn-google m-b-20">
          <img src="" alt="" />
          Google
        </button>
      </div>
    </div>
  );
};

export default Sociallogin;