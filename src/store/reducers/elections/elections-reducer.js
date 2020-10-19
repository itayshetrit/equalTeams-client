import * as actionTypes from '../../actions/elections/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
    list: null,
    loading: false,
    error: null,
    flag: false
};

const electionsStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const electionsSuccess = (state, action) => {
    return updateObject(state, {
        list: action.list,
        loading: false,
        error: null,
    })
}

const electionsFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}
export const cleanElections = (state, action) => {
    return updateObject(state, {
        ...initialState

    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ELECTIONS_START: return electionsStart(state, action);
        case actionTypes.ELECTIONS_SUCCESS: return electionsSuccess(state, action);
        case actionTypes.ELECTIONS_FAIL: return electionsFail(state, action);
        case actionTypes.CLEAN_ELECTIONS: return cleanElections(state, action);
        default:
            return state;
    }
};

export default reducer;