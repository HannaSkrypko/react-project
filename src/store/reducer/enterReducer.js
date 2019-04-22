import * as actionType from '../action/actionTypes';

const initialState = {
    currentUser: {
        email: "ann201096@mail.ru",
        password: "sha1$e062ac08$1$ac5c9f5cdcc8e8d790c07305e634715...",
        username: "anytaskr",
    },
    users: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case actionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser,
            }
        default:
            return state;
    }
}

export default reducer;