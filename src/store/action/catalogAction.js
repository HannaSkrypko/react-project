import * as actionType from './actionTypes';

export const addToCart = ( product ) => {
    return {
        type: actionType.ADD_TO_CART,
        product: product,
    }
};

export const removeFromCart = ( productId ) => {
    return {
        type: actionType.REMOVE_FROM_CART,
        productId: productId,
    }
};

export const incrementCartItem = ( productId ) => {
    return {
        type: actionType.INCREMENT_CART_ITEM,
        productId: productId,
    }
};

export const decrementCartItem = (productId) => {
    return {
        type: actionType.DECREMENT_CART_ITEM,
        productId: productId,
    }
}