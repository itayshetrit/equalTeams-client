import clientsApi from '../../api/clients-api';
import * as actionTypes from './actionTypes';



export const getClientsStart = (action) => {
    return {
        type: action
    };
};
export const getClientsSuccess = (action, clients) => {
    return {
        type: action,
        clients
    };
};
export const getClientsFail = (action, error) => {
    return {
        type: action,
        error
    };
};

export const cleanClients = () => {
    return {
        type: actionTypes.CLEAN_CLIENTS
    }
}

export const getClients = () => {
    return async (dispatch) => {
        dispatch(getClientsStart(actionTypes.GET_CLIENTS_START))
        const{status,data,error} = await clientsApi.getClients()
        if (status === 200) {
            return dispatch(getClientsSuccess(actionTypes.GET_CLIENTS_SUCCESS,data));
        } else {
            return dispatch(getClientsFail(actionTypes.GET_CLIENTS_FAIL,error));
        }
    }
}
