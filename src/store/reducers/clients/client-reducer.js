import * as actionTypes from '../../actions/clients/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
    client: null,
    loading: false,
    error: null
};

const clientActionStart = (state,) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const clientActionSuccess = (state, action) => {
    return updateObject(state, {
        client: action.client,
        loading: false,
        error: null,

    })
}

const clientActionFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const cleanClient = (state) => {
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

        // crud client actions
        case
            actionTypes.GET_CLIENT_BY_ID_START ||
            actionTypes.EDIT_CLIENT_BY_ID_START ||
            actionTypes.DELETE_CLIENT_BY_ID_START ||
            actionTypes.ADD_CLIENT_START
            : return clientActionStart(state);
        case
            actionTypes.GET_CLIENT_BY_ID_SUCCESS ||
            actionTypes.EDIT_CLIENT_BY_ID_SUCCESS ||
            actionTypes.DELETE_CLIENT_BY_ID_SUCCESS ||
            actionTypes.ADD_CLIENT_SUCCESS
            : return clientActionSuccess(state, action);
        case
            actionTypes.GET_CLIENT_BY_ID_FAIL ||
            actionTypes.EDIT_CLIENT_BY_ID_FAIL ||
            actionTypes.DELETE_CLIENT_BY_ID_FAIL ||
            actionTypes.ADD_CLIENT_FAIL
            : return clientActionFail(state, action);
        case
            actionTypes.CLEAN_CLIENT
            : return cleanClient(state);


        default:
            return state;
    }
};

export default reducer;