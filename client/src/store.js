import {combineReducers} from 'redux';
import {createStore, applyMiddleware,} from 'redux';
import { thunk } from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllPizzasReducer} from '../src/reducers/pizzaReducer';
import {cartReducer} from '../src/reducers/cartReducer';
import {registerUserReducer} from '../src/reducers/userReducer';
import {loginUserReducer} from '../src/reducers/userReducer';




const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
};

// const composeEnhancers = composeWithDevTools({});
// const store = createStore(finalReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  // Issue: Apply `composeEnhancers` here
  composeEnhancers(applyMiddleware(thunk)))

export default store;
