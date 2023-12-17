import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CartScreen() {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems

    return (
        <div>

            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <h2 style={{ fontSize: '40px' }} > My Cart</h2>

                    {cartItems.map(item => {

                        return <div className='flex-container'>


                            <div className='text-left m-1 w-100'>
                                <h2 style={{fontSize:'20px'}}>{item.name} [{item.varient}]</h2>
                                <h3 style={{fontSize:'20px'}}>Price : {item.quantity}*{ item.prices[0][item.varient]} = {item.price}</h3>
                                <h3 style={{fontSize:'20px',display:'inline'}}>Quantity :</h3>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" aria-hidden="true"></i>
                                <hr />


                            </div>
                            

                            <div className='m-1 w-100'>
                            <img src={item.image} style={{ height: '80px', width: '80px' }} />
                                

                            </div>
                            <div className='m-1 w-100'>
                            <i className="fa fa-trash mt-5" aria-hidden="true"></i>


                            </div>

                        </div>
                    })}





                </div>
                <div className='col-md-4'></div>
            </div>

        </div>
    )
}
