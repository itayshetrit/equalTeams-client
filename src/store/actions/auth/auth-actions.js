import * as actionTypes from './actionTypes';
import authApi from '../../api/auth-api';



const authActionStart = (action) => {
	return {
		type: action
	}
}

const authActionSuccess = (action,user) => {
	return {
		type: action,
		user
	};
};

const authActionFailed = (action,error) => {
	return {
		type: action,
		error
	}
}

const logout = (action) => {
	localStorage.removeItem("gal");
	return {
		type: action
	}
}

// export const setAuthRedirectPath = (path) => {
// 	return {
// 		type: actionTypes.SET_AUTH_REDIRECT_PATH,
// 		path: path
// 	};
// };




export const login = (creds) => {
	return async (dispatch) => {
		dispatch(authActionStart(actionTypes.LOGIN_START));
		const { status, data, error } = await authApi.login(creds);
		if (status === 200 && data.token) {
			localStorage['gal'] = await data.token
			return dispatch(authActionSuccess(actionTypes.AUTH_SUCCESS,data.user));
		}
		else {
			return dispatch(authActionFailed(actionTypes.AUTH_FAILED,error))
		}
	}
}

export const checkAuth = () => {
	return async (dispatch, getState) => {
		dispatch(authActionStart(actionTypes.CHECK_AUTH_START));
		const token = localStorage.getItem('gal');
		if (!token) {
			dispatch(logout(actionTypes.LOCAL_LOGOUT_SUCCESS));
		}
		else {
			const { status, data, error } = await authApi.checkAuth();
			if (status === 200) {
				return dispatch(authActionSuccess(actionTypes.CHECK_AUTH_SUCCESS, data));
			}
			else {
				return dispatch(authActionFailed(actionTypes.AUTH_FAILED,error));
			}
		}

	};
};

export const registration = (body) => {
    return async (dispatch) => {
        dispatch(authActionStart(actionTypes.REGISTER_START))
        const{status, error} = await authApi.register(body)

        if (status === 200) {
            return dispatch(authActionSuccess(actionTypes.REGISTER_SUCCESS,null));
        } else {
            return dispatch(authActionFailed(actionTypes.REGISTER_FAIL, error));
        }
    }
}




export const logoutAllLoading = (action) => {
	return {
		type: action
	};
};
export const logoutAllSuccess = (action) => {
	return {
		type: action,
	};
};

export const logoutAllFail = (action, error) => {
	return {
		type: action,
		error
	};
};

export const logoutAll1 = () => {
	return async (dispatch, getState) => {
		dispatch(logoutAllLoading(actionTypes.LOCAL_LOGOUT_START))
		const { status, error } = await authApi.logoutAll()
		if (status === 200) {
			await localStorage.removeItem('gal');
			return dispatch(logoutAllSuccess(actionTypes.LOCAL_LOGOUT_SUCCESS));
		} else {
			return dispatch(logoutAllFail(error));
		}
	}
}

