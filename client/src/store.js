import {combineReducers} from 'redux';
import {createStore, applyMiddleware,} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllPizzasReducer} from '../src/reducers/pizzaReducer';
import {addToCartReducer} from '../src/reducers/cartReducer';




const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    addToCartReducer: addToCartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []


const initialState = {
    addToCartReducer: {
        cartItems: cartItems
    }
};

const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;