import * as actionType from '../action/actionTypes';

const initialState = {
    cart: [],
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            let addArray = state.cart;
            let product = action.product;
            product.quantity = 1;
            addArray = addArray.concat(product);
            return {
                ...state,
                cart: addArray,
            }
        case actionType.REMOVE_FROM_CART:
            let removeArray = state.cart;
            removeArray = removeArray.filter((item, index) => index !== action.productId);
            return {
                ...state,
                cart: removeArray,
            }
        case actionType.INCREMENT_CART_ITEM:
            let incArr = [...state.cart];
            incArr = incArr.map(item => {
                if (item.id === action.productId) {
                    return {
                        ...item, 
                        quantity: item.quantity + 1,
                    }
                } else {
                    return {
                        ...item, 
                    }
                }
            })
            return {
                ...state,
                cart: incArr,
            }   
        case actionType.DECREMENT_CART_ITEM:
            let decArr = [...state.cart];
            decArr = state.cart.map(item=> {
                if (item.id === action.productId) {
                    return {
                        ...item, 
                        quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
                    }
                } else {
                    return {
                        ...item, 
                    }
                }
            })
            return {
                ...state,
                cart: decArr,
            }         
        default:
            return state;
    }
}

export default reducer;