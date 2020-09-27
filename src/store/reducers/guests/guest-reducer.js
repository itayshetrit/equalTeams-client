import * as actionTypes from '../../actions/guests/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
    guest: null,
    loading: false,
    error: null
};

const guestActionStart = (state, action) => {
    console.log("guestActionStart")
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const guestActionSuccess = (state, action) => {
    return updateObject(state, {
        guest: action.guest,
        loading: false,
        error: null,

    })
}

const guestActionFail = (state, action) => {
    console.log(action)
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

const cleanGuest = (state) => {
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

        // crud guest actions
        case
            actionTypes.GET_GUEST_BY_ID_START ||
            actionTypes.EDIT_GUEST_BY_ID_START ||
            actionTypes.DELETE_GUEST_BY_ID_START ||
            actionTypes.SET_GUEST_TABLE_START ||
            actionTypes.ADD_GUEST_START
            : return guestActionStart(state, action);
        case
            actionTypes.GET_GUEST_BY_ID_SUCCESS ||
            actionTypes.EDIT_GUEST_BY_ID_SUCCESS ||
            actionTypes.DELETE_GUEST_BY_ID_SUCCESS ||
            actionTypes.SET_GUEST_TABLE_SUCCESS ||
            actionTypes.ADD_GUEST_SUCCESS
            : return guestActionSuccess(state, action);
        case
            actionTypes.GET_GUEST_BY_ID_FAIL ||
            actionTypes.EDIT_GUEST_BY_ID_FAIL ||
            actionTypes.DELETE_GUEST_BY_ID_FAIL ||
            actionTypes.SET_GUEST_TABLE_FAIL ||
            actionTypes.ADD_GUEST_FAIL
            : return guestActionFail(state, action);
        case
            actionTypes.CLEAN_GUEST
            : return cleanGuest(state);


        default:
            return state;
    }
};

export default reducer;