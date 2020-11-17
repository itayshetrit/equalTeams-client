import * as actionTypes from './actionTypes';
import electionsApi from '../../api/elections-api';
import usersApi from '../../api/users-api';

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
export const results = (action, results) => {
    return {
        type: action,
        results
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
            return dispatch(results(actionTypes.RESULTS, data));
        } else {
            return dispatch(electionsFail(actionTypes.ELECTIONS_FAIL, error));
        }
    }
}

export const getUsersToElections = (team) => {
    return async (dispatch) => {
        dispatch(electionsStart(actionTypes.GET_USERS_TO_ELECTIONS_START))
        const{status,data,error} = await usersApi.getUsers(team)
        if (status === 200) {
            return dispatch(electionsSuccess(actionTypes.GET_USERS_TO_ELECTIONS_SUCCESS,data));
        } else {
            return dispatch(electionsFail(actionTypes.GET_USERS_TO_ELECTIONS_FAIL,error));
        }
    }
}

export const updateList = (list) => {
    return async (dispatch) => {
        return dispatch(electionsSuccess(actionTypes.UPDATE_USERS_TO_ELECTIONS_SUCCESS, list));
    }
}

export const cleanElections = () => {
    return {
        type: actionTypes.CLEAN_ELECTIONS
    }
}