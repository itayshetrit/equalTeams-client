import * as actionTypes from './actionTypes';
import authApi from '../../api/auth-api';

export const authActionStart = (action) => {
	return {
		type: action
	};
};
export const authActionSuccess = (action, user) => {
	return {
		type: action,
		user
	};
};
export const authActionFail = (action, error) => {
	return {
		type: action,
		error
	};
};

export const logout = () => {
	localStorage.removeItem("gal");
	return {
		type: actionTypes.LOGOUT_SPECIFIC_SUCCESS
	}
}

export const setAuthRedirectPath = (path) => {
	return {
		type: actionTypes.SET_AUTH_REDIRECT_PATH,
		path: path
	};
};

export const login = (creds) => {
	return async (dispatch) => {
		dispatch(authActionStart(actionTypes.LOGIN_START))
		const { data, status, error } = await authApi.login(creds)
		if (status === 200 && data.token) {
			localStorage['gal'] = await data.token;
			return dispatch(authActionSuccess(actionTypes.LOGIN_SUCCESS, null));
		} else {
			return dispatch(authActionFail(actionTypes.LOGIN_FAIL, error));
		}
	}
}

export const checkAuth = () => {
	return async (dispatch) => {
		dispatch(authActionStart(actionTypes.CHECK_AUTH_START))
		const token = localStorage['gal'];
		if (!token) {
			logout();
		}
		else {
			const { data, status, error } = await authApi.checkAuth()
			if (status === 200) {
				return dispatch(authActionSuccess(actionTypes.CHECK_AUTH_SUCCESS, data));
			}
			else {
				return dispatch(authActionFail(actionTypes.CHECK_AUTH_FAIL, error));
			}
		}

	}
}

// export const registerLoading = () => {
// 	return {
// 		type: actionTypes.REGISTER_START
// 	};
// };
// export const registerSuccess = () => {
// 	return {
// 		type: actionTypes.REGISTER_SUCCESS,
// 	};
// };

// export const registerFail = error => {
// 	return {
// 		type: actionTypes.REGISTER_FAIL,
// 		error
// 	};
// };



// export const logoutAllLoading = () => {
// 	return {
// 		type: actionTypes.LOGOUT_START
// 	};
// };
// export const logoutAllSuccess = () => {
// 	return {
// 		type: actionTypes.LOGOUT_SUCCESS,
// 	};
// };

// export const logoutAllFail = error => {
// 	return {
// 		type: actionTypes.LOGOUT_FAIL,
// 		error
// 	};
// };

// export const logoutAll1 = () => {
// 	return async (dispatch, getState) => {
// 		dispatch(logoutAllLoading())
// 		const { status, error } = await authApi.logoutAll()
// 		if (status === 200) {
// 			await localStorage.removeItem('gal');
// 			return dispatch(logoutAllSuccess());
// 		} else {
// 			return dispatch(logoutAllFail(error));
// 		}
// 	}
// }

