export const addToCart = (pizza, quantity, varient) => async (dispatch, getState) => {
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity
    }

   dispatch({type: 'ADD_TO_CART', payload: cartItem})

   const cartItems = getState().addToCartReducer.cartItems

   localStorage.setItem('cartItems', JSON.stringify(cartItems))
}