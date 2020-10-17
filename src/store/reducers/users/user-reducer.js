import * as actionTypes from '../../actions/users/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
    user: null,
    loading: false,
    error: null
};

const userActionStart = (state,) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const userActionSuccess = (state, action) => {
    return updateObject(state, {
        user: action.user,
        loading: false,
        error: null,

    })
}

const userActionFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const cleanUser = (state) => {
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

        // crud user actions
        case
            actionTypes.GET_USER_BY_ID_START ||
            actionTypes.EDIT_USER_BY_ID_START ||
            actionTypes.DELETE_USER_BY_ID_START ||
            actionTypes.ADD_USER_START
            : return userActionStart(state);
        case
            actionTypes.GET_USER_BY_ID_SUCCESS ||
            actionTypes.EDIT_USER_BY_ID_SUCCESS ||
            actionTypes.DELETE_USER_BY_ID_SUCCESS ||
            actionTypes.ADD_USER_SUCCESS
            : return userActionSuccess(state, action);
        case
            actionTypes.GET_USER_BY_ID_FAIL ||
            actionTypes.EDIT_USER_BY_ID_FAIL ||
            actionTypes.DELETE_USER_BY_ID_FAIL ||
            actionTypes.ADD_USER_FAIL
            : return userActionFail(state, action);
        case
            actionTypes.CLEAN_USER
            : return cleanUser(state);


        default:
            return state;
    }
};

export default reducer;