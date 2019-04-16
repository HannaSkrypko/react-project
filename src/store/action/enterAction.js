import * as actionType from './actionTypes';
import axios from '../../../axios-root';

export const setUsers = ( users ) => {
    return {
        type: actionType.SET_USERS,
        users: users,
    }
}

export const initUsers = () => {
    return dispatch => {
        axios.get('/users.json')
             .then(
                response => {
                    const fetchArray = [];
                    for (let key in response.data) {
                        fetchArray.push({
                            ...response.data[key],
                            id: key,
                        })
                    };
                    dispatch(setUsers(fetchArray));
                }
             )
             .catch(error => {
                 console.log("initUsers: " + error)
             });
    };
};

export const setCurrentUser = ( currentUser ) => {
    return {
        type: actionType.SET_CURRENT_USER,
        currentUser: currentUser
    }
}

export const signUpUser = ( userInfo ) => {
    return dispatch => {
        axios.post('/users.json', userInfo)
            .then(response => {
                dispatch(initUsers());
                dispatch(setCurrentUser(userInfo))
            })
            .catch(error => console.log("signUpUser: " + error))
    }
}
