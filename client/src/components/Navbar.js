import React from 'react'
import { useSelector, useDispatch } from 'react-redux'





export default function () {
    const cartState = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    return (
        <div>

            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">Pizza Express Delivery</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Cart">
                                Cart {cartState.cartItems.length}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
