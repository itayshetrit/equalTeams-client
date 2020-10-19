import * as actionTypes from './actionTypes';
import electionsApi from '../../api/elections-api';

export const electionsStart = (action) => {
    return {
        type: action
    };
};
export const electionsSuccess = (action, list) => {
    return {
        type: action,
        list
    };
};
export const electionsFail = (action, error) => {
    return {
        type: action,
        error
    };
};

export const elections = (body) => {
    return async (dispatch, getState) => {
        dispatch(electionsStart(actionTypes.ELECTIONS_START))
        const { data, status, error } = await electionsApi.elections(body)
        if (status === 200) {
            return dispatch(electionsSuccess(actionTypes.ELECTIONS_SUCCESS, data));
        } else {
            return dispatch(electionsFail(actionTypes.ELECTIONS_FAIL));
        }
    }
}

export const cleanElections = () => {
    return {
        type: actionTypes.CLEAN_ELECTIONS
    }
}