import userApi from '../../api/user-api';
import * as actionTypes from './actionTypes';



export const userActionStart = (action) => {
    return {
        type: action
    };
};
export const userActionSuccess = (action, user) => {
    return {
        type: action,
        user
    };
};
export const userActionFail = (action, error) => {
    return {
        type: action,
        error
    };
};

export const cleanUser = () => {
    return {
        type: actionTypes.CLEAN_USER
    }
}

export const addUser = (body) => {
    return async (dispatch,getState) => {
        dispatch(userActionStart(actionTypes.ADD_USER_START))
        const{status, error} = await userApi.addUser(body)

        if (status === 200) {
            return dispatch(userActionSuccess(actionTypes.ADD_USER_SUCCESS,null));
        } else {
            console.log(error);
            return dispatch(userActionFail(actionTypes.ADD_USER_FAIL,error));
        }
    }
}

// export const getClientById = (id) => {
//     return async (dispatch) => {
//         dispatch(clientActionStart(actionTypes.GET_CLIENT_BY_ID_START))
//         const { status, data, error } = await clientApi.getClientById(id)
//         if (status === 200) {
//             return dispatch(clientActionSuccess(actionTypes.GET_CLIENT_BY_ID_SUCCESS, data));
//         } else {
//             return dispatch(clientActionFail(actionTypes.GET_CLIENT_BY_ID_FAIL, error));
//         }
//     }
// }

// export const deleteClientById = (id) => {
//     return async (dispatch) => {
//         dispatch(clientActionStart(actionTypes.DELETE_CLIENT_BY_ID_START))
//         const { status, error } = await clientApi.deleteClientById(id)
//         if (status === 200) {
//             return dispatch(clientActionSuccess(actionTypes.DELETE_CLIENT_BY_ID_SUCCESS, null));
//         } else {
//             return dispatch(clientActionFail(actionTypes.DELETE_CLIENT_BY_ID_FAIL, error));
//         }
//     }
// }

export const editUserById = (id, body) => {
    return async (dispatch) => {
        dispatch(userActionStart(actionTypes.EDIT_USER_BY_ID_START))
        const { status, error } = await userApi.editUserById(id, body)
        if (status === 200) {
            return dispatch(userActionSuccess(actionTypes.EDIT_USER_BY_ID_SUCCESS, null));
        } else {
            return dispatch(userActionFail(actionTypes.EDIT_USER_BY_ID_FAIL, error));
        }
    }
}

export const deleteUserById = (id, body) => {
    return async (dispatch) => {
        dispatch(userActionStart(actionTypes.DELETE_USER_BY_ID_START))
        const { status, error } = await userApi.deleteUserById(id)
        if (status === 200) {
            return dispatch(userActionSuccess(actionTypes.DELETE_USER_BY_ID_SUCCESS, null));
        } else {
            return dispatch(userActionFail(actionTypes.DELETE_USER_BY_ID_FAIL, error));
        }
    }
}

// export const addGuest= (body) => {
//     return async (dispatch) => {
//         dispatch(clientActionStart(actionTypes.ADD_CLIENT_START))
//         const { status, error } = await clientApi.addGuest(body)
//         if (status === 200) {
//             return dispatch(clientActionSuccess(actionTypes.ADD_CLIENT_SUCCESS, null));
//         } else {
//             return dispatch(clientActionFail(actionTypes.ADD_CLIENT_FAIL, error));
//         }
//     }
// }


