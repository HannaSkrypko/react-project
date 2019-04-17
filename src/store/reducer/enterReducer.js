import * as actionType from '../action/actionTypes';

const initialState = {
    currentUser: null,
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