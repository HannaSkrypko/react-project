import * as actionType from '../action/actionTypes';

const initialState = {
    currentUser: {
        email: "test@test.com",
        username: "test",
        password: "sha1$11c2c481$1$aff9c479168c203660f9d6923552ccb480ab1575",
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