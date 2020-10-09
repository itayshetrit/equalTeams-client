import * as actionTypes from './actionTypes';
import tablesApi from '../../api/tables-api';

export const tablesActionStart = (action) => {
    return {
        type: action
    };
};
export const tablesActionSuccess = (action, tables) => {
    return {
        type: action,
        tables
    };
};
export const tablesActionFail = (action, error) => {
    return {
        type: action,
        error
    };
};

export const loadTables= (body) => {
    return async (dispatch) => {
        dispatch(tablesActionStart(actionTypes.LOAD_TABLES_START))
        const { status, error } = await tablesApi.loadTables1(body)
        if (status === 200) {
            return dispatch(tablesActionSuccess(actionTypes.LOAD_TABLES_SUCCESS, null));
        } else {
            return dispatch(tablesActionFail(actionTypes.LOAD_TABLES_FAIL, error));
        }
    }
}

export const getTables= () => {
    return async (dispatch) => {
        dispatch(tablesActionStart(actionTypes.GET_TABLES_START))
        const { status, data, error } = await tablesApi.getTables()
        if (status === 200) {
            return dispatch(tablesActionSuccess(actionTypes.GET_TABLES_SUCCESS, data));
        } else {
            return dispatch(tablesActionFail(actionTypes.GET_TABLES_FAIL, error));
        }
    }
}

export const cleanTables = () => {
    return {
        type: actionTypes.CLEAN_TABLES
    }
}