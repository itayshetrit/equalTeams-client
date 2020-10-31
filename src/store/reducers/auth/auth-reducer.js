import * as actionTypes from '../../actions/auth/actionTypes';
import { updateObject } from '../../utilities';
const initialState = {
	user: null,
	authenticated: false,
	error: null,
	loading: false,
	authRedirectPath: null
}

const authStart = (state, action) => {
	return updateObject(state, {
		error: null,
		user: null,
		authenticated: false,
		loading: true
	});
}

const authUserInfoStart = (state, action) => {
	return updateObject(state, {
		loading: true,
		error: null
	});
}

const authUserInfoSuccess = (state, action) => {
	return updateObject(state, {
		user: action.user,
		loading: false,
		authenticated: true,
		error: null
	});
}


const authSuccess = (state, action) => {
	return updateObject(state, {
		authenticated: true,
		loading: false,
		error: null
	});
}

const authLogin = (state, action) => {
	return updateObject(state, {
		user: null,
		authenticated: false,
		loading: true
	})
}

const authFail = (state, action) => {
	return updateObject(state, {
		user: null,
		authenticated: false,
		error: action.error,
		loading: false
	});
}

const authStartLogout = (state, action) => {
	return updateObject(state, {
		loading: true,
	});
}

const authLogout = (state, action) => {
	return updateObject(state, {
		user: null,
		authenticated: false,
		error: null,
		loading: false,
		authRedirectPath: '/login'
	});
}

const logoutSuccess = (state, action) => {
	return updateObject(state, { ...initialState })
}

const setAuthRedirectPath = (state, action) => {
	return updateObject(state, { authRedirectPath: action.path });
}

export const logout = (state, action) => {
	return updateObject(state, {
		...initialState,
		authRedirectPath: '/login'

	})
}


const authActionStart = (state, action) => {
	return updateObject(state, {
		loading: true,
		error: null
	})
}

const authActionSuccess = (state, action) => {
	return updateObject(state, {
		user: action.user,
		loading: false,
		error: null,
	})
}

const authActionFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case (
			actionTypes.LOGIN_START ||
			actionTypes.CHECK_AUTH_START ||
			actionTypes.LOGOUT_SPECIFIC_START ||
			actionTypes.LOGOUT_SPECIFIC_START ||
			actionTypes.REGISTER_START
		): return authActionStart(state, action);

		case (
			actionTypes.LOGIN_SUCCESS ||
			actionTypes.CHECK_AUTH_SUCCESS ||
			actionTypes.LOGOUT_SPECIFIC_SUCCESS ||
			actionTypes.LOGOUT_SPECIFIC_SUCCESS ||
			actionTypes.REGISTER_SUCCESS
		): return authActionSuccess(state, action);

		case (
			actionTypes.LOGIN_FAIL ||
			actionTypes.CHECK_AUTH_FAIL ||
			actionTypes.LOGOUT_SPECIFIC_FAIL ||
			actionTypes.LOGOUT_SPECIFIC_FAIL ||
			actionTypes.REGISTER_FAIL
		): return authActionFail(state, action);


		// case actionTypes.AUTH_START: return authStart(state, action);
		// case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
		// case actionTypes.AUTH_FAILED: return authFail(state, action);
		// case actionTypes.AUTH_USER_INFO_START: return authUserInfoStart(state, action);
		// case actionTypes.AUTH_USER_INFO_SUCCESS: return authUserInfoSuccess(state, action);
		// case actionTypes.AUTH_LOGIN: return authLogin(state, action);
		// case actionTypes.AUTH_START_LOGOUT: return authStartLogout(state, action);
		// case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
		case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);

		// case actionTypes.REGISTER_START: return registerStart(state, action);
		// case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
		// case actionTypes.REGISTER_FAIL: return registerFailed(state, action);

		// case actionTypes.LOGOUT_START: return logoutStart(state, action);
		// case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state, action);
		// case actionTypes.LOGOUT_FAIL: return logoutFailed(state, action);

		// case actionTypes.PRODUCT_ACTION_START: return productActionStart(state, action);
		// case actionTypes.PRODUCT_ACTION_SUCCESS: return productActionSuccess(state, action);
		// case actionTypes.PRODUCT_ACTION_FAIL: return productActionFailed(state, action);
		default:
			return state;
	}
};

export default reducer;