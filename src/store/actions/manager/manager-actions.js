import managerApi from '../../api/manager-api';
import * as actionTypes from './actionTypes';

export const managerActionStart = (action) => {
    
    return {
        type: action
    };
};
export const managerActionSuccess = (action, manager) => {
    return {
        type: action,
        manager
    };
};
export const managerActionFail = (action, error) => {
    return {
        type: action,
        error
    };
};



export const addTeam = (body) => {
    return async (dispatch) => {
        dispatch(managerActionStart(actionTypes.ADD_TEAM_START))
        const { status, error } = await managerApi.addTeam(body)
        if (status === 200) {
            return dispatch(managerActionSuccess(actionTypes.ADD_TEAM_START, null));
        } else {
            return dispatch(managerActionFail(actionTypes.ADD_TEAM_FAIL, error));
        }
    }
}
