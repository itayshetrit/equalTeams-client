import * as actionTypes from '../../actions/clients/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
    clients: [],
    loading: false,
    error: null,
    flag: false
};

const getClientsStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const getClientsSuccess = (state, action) => {
    return updateObject(state, {
        clients: action.clients,
        loading: false,
        error: null,
    })
}

const getClientsFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const cleanClients = (state, action) => {
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
        // get all clients actions
        case actionTypes.GET_CLIENTS_START: return getClientsStart(state, action);
        case actionTypes.GET_CLIENTS_SUCCESS: return getClientsSuccess(state, action);
        case actionTypes.GET_CLIENTS_FAIL: return getClientsFail(state, action);
        case actionTypes.CLEAN_CLIENTS: return cleanClients(state, action);
        default:
            return state;
    }
};

export default reducer;