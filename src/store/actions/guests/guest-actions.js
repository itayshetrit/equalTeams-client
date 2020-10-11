import guestApi from '../../api/guest-api';
import * as actionTypes from './actionTypes';

export const guestActionStart = (action) => {
    
    return {
        type: action
    };
};
export const guestActionSuccess = (action, guest) => {
    return {
        type: action,
        guest
    };
};
export const guestActionFail = (action, error) => {
    return {
        type: action,
        error
    };
};

export const cleanGuest = () => {
    return {
        type: actionTypes.CLEAN_GUEST
    }
}

export const editGuestById = (body, id) => {
    return async (dispatch) => {
        dispatch(guestActionStart(actionTypes.EDIT_GUEST_BY_ID_START))
        const { status, error } = await guestApi.editGuestByID(body, id)
        if (status === 200) {
            return dispatch(guestActionSuccess(actionTypes.EDIT_GUEST_BY_ID_SUCCESS, null));
        } else {
            return dispatch(guestActionFail(actionTypes.EDIT_GUEST_BY_ID_FAIL, error));
        }
    }
}

export const setGuestTable= (body) => {
    return async (dispatch) => {
        dispatch(guestActionStart(actionTypes.SET_GUEST_TABLE_START))
        const { status, error } = await guestApi.setGuestTable(body)
        if (status === 200) {
            return dispatch(guestActionSuccess(actionTypes.SET_GUEST_TABLE_SUCCESS, null));
        } else {
            return dispatch(guestActionFail(actionTypes.SET_GUEST_TABLE_FAIL, error));
        }
    }
}

export const deleteGuest= (id) => {
    return async (dispatch) => {
        dispatch(guestActionStart(actionTypes.DELETE_GUEST_BY_ID_START))
        const { status, error } = await guestApi.deleteGuest(id)
        if (status === 200) {
            return dispatch(guestActionSuccess(actionTypes.DELETE_GUEST_BY_ID_SUCCESS, null));
        } else {
            return dispatch(guestActionFail(actionTypes.DELETE_GUEST_BY_ID_FAIL, error));
        }
    }
}