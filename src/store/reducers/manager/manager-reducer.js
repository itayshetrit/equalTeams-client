import * as actionTypes from '../../actions/manager/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
    manager: null,
    loading: false,
    error: null
};

const managerActionStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const managerActionSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
    })
}

const managerActionFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_TEAM_START: return managerActionStart(state, action);
        case actionTypes.ADD_TEAM_SUCCESS: return managerActionSuccess(state, action);
        case actionTypes.ADD_TEAM_FAIL: return managerActionFail(state, action);
        default:
            return state;
    }
};

export default reducer;