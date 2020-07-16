import authApi from '../../api/user-api';
import * as actionTypes from './actionTypes';



export const editProductStatus = (ccc) => {
    return async dispatch => {
        dispatch(actionLoading())
        const{status, data, error} = await authApi.editProductStatus1(ccc)
        if (status === 200) {
            return dispatch(actionSuccess(data));
        } else {
            return dispatch(actionFail(error));
        }
    }
}
export const actionLoading = () => {
    return {
        type: actionTypes.PRODUCT_ACTION_START
    };
};
export const actionSuccess = (user) => {
    return {
        type: actionTypes.PRODUCT_ACTION_SUCCESS,
        user: user,
    };
};

export const actionFail = err => {
    return {
        type: actionTypes.PRODUCT_ACTION_FAIL,
        error: err
    };
};
export const upAndDown1 = (body) => {
    return async dispatch => {
        dispatch(actionLoading())
        const{status, data, error} = await authApi.upAndDown(body)
        if (status === 200) {
            return dispatch(actionSuccess(data));
        } else {
            return dispatch(actionFail(error));
        }
    }
}

export const checkForUpdates = () => {
    return async dispatch => {
        dispatch(checkForUpdatesLoading())
        const{status, data, error} = await authApi.checkForUpdates1()
        if (status === 200) {
            return dispatch(checkForUpdatesSuccess(data));
        } else {
            return dispatch(checkForUpdatesFail(error));
        }
    }
}
export const checkForUpdatesLoading = () => {
    return {
        type: actionTypes.PRODUCT_ACTION_START
    };
};
export const checkForUpdatesSuccess = (user) => {
    return {
        type: actionTypes.PRODUCT_ACTION_SUCCESS,
        user: user,
    };
};

export const checkForUpdatesFail = err => {
    return {
        type: actionTypes.PRODUCT_ACTION_FAIL,
        error: err
    };
};