import React from 'react'
import { useState, useEffect } from 'react'


export default function
    () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


function register() {
    if (password != confirmPassword) {
        alert('password not matched')
        
    }
    else{
        const user={
            name,
            email,
            password
        }
        console.log(user)
    }

}

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5'>
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
                    </div>

                </div>

            </div>
        </div>
    )
}


