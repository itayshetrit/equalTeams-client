import * as actionTypes from '../../actions/elections/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
    list: null,
    results:null,
    loading: false,
    error: null
};

const electionsStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const getResults = (state, action) => {
    return updateObject(state, {
        results: action.results,
        loading: false,
        error: null,
    })
}

const electionsSuccess = (state, action) => {
    return updateObject(state, {
        list: action.list,
        loading: false,
        error: null,
    })
}


const getUsersToElectionsSuccess = (state, action) => {
    let players = [];
    for (let i of action.list) {
        players.push({ ...i, name: i.fname + " " + i.lname, choose: false })
    }
    return updateObject(state, {
        list: players,
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
        

        case actionTypes.RESULTS: return getResults(state, action);
        
        case actionTypes.ELECTIONS_START: return electionsStart(state, action);
        case actionTypes.ELECTIONS_SUCCESS: return electionsSuccess(state, action);
        case actionTypes.UPDATE_USERS_TO_ELECTIONS_SUCCESS: return electionsSuccess(state, action);
        case actionTypes.ELECTIONS_FAIL: return electionsFail(state, action);
        case actionTypes.CLEAN_ELECTIONS: return cleanElections(state, action);

        case actionTypes.GET_USERS_TO_ELECTIONS_START: return electionsStart(state, action);
        case actionTypes.GET_USERS_TO_ELECTIONS_SUCCESS: return getUsersToElectionsSuccess(state, action);
        case actionTypes.GET_USERS_TO_ELECTIONS_FAIL: return electionsFail(state, action);
        default:
            return state;
    }
};
export default reducer;