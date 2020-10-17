import * as actionTypes from '../../actions/users/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
    users: [],
    loading: false,
    error: null,
    flag: false
};

const getUsersStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const getUsersSuccess = (state, action) => {
    return updateObject(state, {
        users: action.users,
        loading: false,
        error: null,
    })
}

const getUsersFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const cleanUsers = (state, action) => {
    return updateObject(state, {
        ...initialState
        // turns: [],
        // loading: false,
        // error: null,
        // flag: false
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // get all users actions
        case actionTypes.GET_USERS_START: return getUsersStart(state, action);
        case actionTypes.GET_USERS_SUCCESS: return getUsersSuccess(state, action);
        case actionTypes.GET_USERS_FAIL: return getUsersFail(state, action);
        case actionTypes.CLEAN_USERS: return cleanUsers(state, action);
        default:
            return state;
    }
};

export default reducer;