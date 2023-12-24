import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from '../actions/userAction.js'
import Loading from '../components/loading'
import Error from '../components/error'
import Success from '../components/success'




  export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginstate = useSelector((state) => state.loginUserReducer);
    const { loading, error } = loginstate;
    const dispatch = useDispatch()

    useEffect(() => {
      if (localStorage.getItem('currentUser')) {
        window.location.href = '/';
      }
    }, []);
  
    const handleLogin = () => {
      const user = { email, password };
      console.log('Login clicked');
      console.log('Email:', email);
      console.log('Password:', password);
     

      dispatch(loginUser(user));
    };

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
          <h2 className='text-center m-2' style={{ fontSize: '35px' }}>
            LOGIN
          </h2>

          {loading && <Loading />}
          {error && <Error error='Invalid Credentials' />}
          

          <div>
            <input
              required
              type='text'
              placeholder='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              required
              type='password'
              placeholder='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button onClick={handleLogin} className='btn mt-3'>
              LOGIN
            </button>
            <br/>
            <a style={{color:'black'}} href='/register' className='mt-2'>Click Here To Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

