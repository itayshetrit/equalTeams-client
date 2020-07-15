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