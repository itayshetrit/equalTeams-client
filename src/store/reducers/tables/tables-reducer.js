import * as actionTypes from '../../actions/tables/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
    tables: [],
    uid: null,
    loading: false,
    error: null,
    flag: false
};

const tablesActionStart = (state, action) => {
    console.log("hi");
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const tablesActionSuccess = (state, action) => {
    console.log("hi");
    return updateObject(state, {
        tables: action.tables,
        loading: false,
        error: null,
    })
}

const tablesActionFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const cleantables = (state, action) => {
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
        // all tables actions

        // case
        case actionTypes.LOAD_TABLES_START: return tablesActionStart(state, action);
        case actionTypes.GET_TABLES_START: return tablesActionStart(state, action);
        // : return tablesActionStart(state, action);
        case actionTypes.LOAD_TABLES_SUCCESS: return tablesActionSuccess(state, action);
        case actionTypes.GET_TABLES_SUCCESS: return tablesActionSuccess(state, action);
        // : return tablesActionSuccess(state, action);
        // case actionTypes.LOAD_TABLES_START || actionTypes.GET_TABLES_START: return tablesActionStart(state, action);
        // case actionTypes.LOAD_TABLES_SUCCESS || actionTypes.GET_TABLES_SUCCESS: return tablesActionSuccess(state, action);
        case
            actionTypes.LOAD_TABLES_FAIL ||
            actionTypes.GET_TABLES_FAIL
            : return tablesActionFail(state, action);
        case
            actionTypes.CLEAN_TABLES
            : return cleantables(state, action);
        default:
            return state;
    }
};

export default reducer;