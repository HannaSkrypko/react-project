import * as actionType from './actionTypes';

export const addToCart = ( product ) => {
    return {
        type: actionType.ADD_TO_CART,
        product: product,
    }
}

export const removeFromCart = ( productId ) => {
    return {
        type: actionType.REMOVE_FROM_CART,
        productId: productId,
    }
}