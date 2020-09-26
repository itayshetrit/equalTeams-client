import * as actionTypes from '../../actions/guests/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
    guests: [],
    loading: false,
    error: null,
    flag: false
};

const getGuestsStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const getGuestsSuccess = (state, action) => {
    return updateObject(state, {
        guests: action.guests,
        loading: false,
        error: null,
    })
}

const getGuestsFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const cleanGuests = (state, action) => {
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
        // get all guests actions
        case actionTypes.GET_GUESTS_START: return getGuestsStart(state, action);
        case actionTypes.GET_GUESTS_SUCCESS: return getGuestsSuccess(state, action);
        case actionTypes.GET_GUESTS_FAIL: return getGuestsFail(state, action);
        case actionTypes.CLEAN_GUESTS: return cleanGuests(state, action);
        default:
            return state;
    }
};

export default reducer;