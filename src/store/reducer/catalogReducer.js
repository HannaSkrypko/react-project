import * as actionType from '../action/actionTypes';

const initialState = {
    cart: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            let addArray = state.cart;
            addArray = addArray.concat(action.product);
            return {
                ...state,
                cart: addArray,
            }
        case actionType.REMOVE_FROM_CART:
            let removeArray = state.cart;
            removeArray = removeArray.splice(action.productId, 1);
            return {
                ...state,
                cart: removeArray,
            }       
        default:
            return state;
    }
}

export default reducer;