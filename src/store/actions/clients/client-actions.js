import clientApi from '../../api/client-api';
import * as actionTypes from './actionTypes';



export const clientActionStart = (action) => {
    return {
        type: action
    };
};
export const clientActionSuccess = (action, client) => {
    return {
        type: action,
        client
    };
};
export const clientActionFail = (action, error) => {
    return {
        type: action,
        error
    };
};

export const cleanClient = () => {
    return {
        type: actionTypes.CLEAN_CLIENT
    }
}

export const getClientById = (id) => {
    return async (dispatch) => {
        dispatch(clientActionStart(actionTypes.GET_CLIENT_BY_ID_START))
        const { status, data, error } = await clientApi.getClientById(id)
        if (status === 200) {
            return dispatch(clientActionSuccess(actionTypes.GET_CLIENT_BY_ID_SUCCESS, data));
        } else {
            return dispatch(clientActionFail(actionTypes.GET_CLIENT_BY_ID_FAIL, error));
        }
    }
}

export const deleteClientById = (id) => {
    return async (dispatch) => {
        dispatch(clientActionStart(actionTypes.DELETE_CLIENT_BY_ID_START))
        const { status, data, error } = await clientApi.deleteClientById(id)
        if (status === 200) {
            return dispatch(clientActionSuccess(actionTypes.DELETE_CLIENT_BY_ID_SUCCESS, null));
        } else {
            return dispatch(clientActionFail(actionTypes.DELETE_CLIENT_BY_ID_FAIL, error));
        }
    }
}

export const editClientById = (id) => {
    return async (dispatch) => {
        dispatch(clientActionStart(actionTypes.EDIT_CLIENT_BY_ID_START))
        const { status, data, error } = await clientApi.editClientById(id)
        if (status === 200) {
            return dispatch(clientActionSuccess(actionTypes.EDIT_CLIENT_BY_ID_SUCCESS, null));
        } else {
            return dispatch(clientActionFail(actionTypes.EDIT_CLIENT_BY_ID_FAIL, error));
        }
    }
}

export const addGuest= (body) => {
    return async (dispatch) => {
        dispatch(clientActionStart(actionTypes.ADD_CLIENT_START))
        const { status, data, error } = await clientApi.addGuest(body)
        if (status === 200) {
            return dispatch(clientActionSuccess(actionTypes.ADD_CLIENT_SUCCESS, null));
        } else {
            return dispatch(clientActionFail(actionTypes.ADD_CLIENT_FAIL, error));
        }
    }
}


