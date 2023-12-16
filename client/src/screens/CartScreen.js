import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function CartScreen() {

const cartstate = useSelector(state => state.addToCartReducer)
const cartItem = cartstate.cartItems

    return (
        <div>

            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <h1 style={{fontSize:'30px'}} > My Cart</h1>

                </div>
                <div className='col-md-4'></div>
            </div>

        </div>
    )
}
