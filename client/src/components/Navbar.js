import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown } from 'react-bootstrap';
import { logoutUser } from '../actions/userAction';









export default function () {
    const cartState = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    return (
        <div>

            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">Pizza Express Delivery</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">


                        {/* {currentUser ? <div className="dropdown">
                            <a className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {currentUser.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                
                                <a className="dropdown-item" href="#">Orders</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </div> : (<li className="nav-item">
                            <a className="nav-link" href="/login">
                                Login
                            </a>
                        </li>)} */}
                        {currentUser ? (
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {currentUser.name}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Orders</Dropdown.Item>
                                    <Dropdown.Item href="#"onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Login
                                </a>
                            </li>
                        )}




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
