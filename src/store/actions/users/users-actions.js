import usersApi from '../../api/users-api';
import * as actionTypes from './actionTypes';

const getUsersStart = (action) => {
    return {
        type: action
    };
};
const getUsersSuccess = (action, users) => {
    return {
        type: action,
        users
    };
};
const getUsersFail = (action, error) => {
    return {
        type: action,
        error
    };
};

export const cleanUsers = () => {
    return {
        type: actionTypes.CLEAN_USERS
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(getUsersStart(actionTypes.GET_USERS_START))
        const{status,data,error} = await usersApi.getUsers()
        if (status === 200) {
            return dispatch(getUsersSuccess(actionTypes.GET_USERS_SUCCESS,data));
        } else {
            return dispatch(getUsersFail(actionTypes.GET_USERS_FAIL,error));
        }
    }
}
