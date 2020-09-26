import guestsApi from '../../api/guests-api';
import * as actionTypes from './actionTypes';



export const getGuestsStart = (action) => {
    return {
        type: action
    };
};
export const getGuestsSuccess = (action, guests) => {
    return {
        type: action,
        guests
    };
};
export const getGuestsFail = (action, error) => {
    return {
        type: action,
        error
    };
};

export const cleanGuests = () => {
    return {
        type: actionTypes.CLEAN_GUESTS
    }
}

export const getGuests = () => {
    return async (dispatch) => {
        dispatch(getGuestsStart(actionTypes.GET_GUESTS_START))
        const{status,data,error} = await guestsApi.getGuests()
        if (status === 200) {
            return dispatch(getGuestsSuccess(actionTypes.GET_GUESTS_SUCCESS,data));
        } else {
            return dispatch(getGuestsFail(actionTypes.GET_GUESTS_FAIL,error));
        }
    }
}
