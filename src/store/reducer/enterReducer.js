import * as actionType from '../action/actionTypes';

const initialState = {
    currentUser: {
        email: "test@test.com",
        username: "test",
        password: "sha1$3117eb56$1$fffe87039b60933d1dd7816b604dce239782a9bf",
        orders: [],
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