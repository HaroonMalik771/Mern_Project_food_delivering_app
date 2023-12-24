import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userAction.js'
import Loading from '../components/loading'
import Error from '../components/error'
import Success from '../components/success'



export default function
    () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const registerstate = useSelector((state) => state.registerUserReducer);
    const { loading, error, success } = registerstate;
    const dispatch = useDispatch()


    function register() {
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        if (password != confirmPassword) {
            alert('password not matched')

        }
        else {
            const user = {
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }

    }

    return (
        <div>
            <div className='row justify-content-center mt-5 '>
                <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>





                    {loading && <Loading />}
                    {error && <Error error='Email Already Exists' />}
                    {success && (<Success success='User Registered Successfully' />)}
                    {/* {loading && <Loading />}
                    {error && <Error error='Email Already Exists' />}
                    {success && !loading && <Success success='User Registered Successfully' />} */}





                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>REGISTER</h2>

                    <div>
                        <input required type='text' placeholder='name' className='form-control' value={name} onChange={
                            (e) => {
                                setName(e.target.value)
                            }
                        }></input>
                        <input required type='text' placeholder='email' className='form-control'
                            value={email} onChange={
                                (e) => {
                                    setEmail(e.target.value)
                                }
                            }></input>
                        <input required type='text' placeholder='password' className='form-control'
                            value={password} onChange={
                                (e) => {
                                    setPassword(e.target.value)
                                }
                            }></input>
                        <input required type='text' placeholder='confirm password' className='form-control'
                            value={confirmPassword} onChange={
                                (e) => {
                                    setConfirmPassword(e.target.value)
                                }
                            }></input>
                        <button onClick={register} className='btn mt-3'>REGISTER</button>
                        <br />
                        <a style={{ color: 'black' }} href='/login' className='mt-2'>Click Here To Login</a>
                    </div>

                </div>

            </div>
        </div>
    )
}


