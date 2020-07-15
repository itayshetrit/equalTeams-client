import * as actionTypes from '../../actions/auth/actionTypes';
import { updateObject } from '../../utilities';
const initialState = {
	user: null,
	authenticated: false,
	error: null,
	loading: false,
	authRedirectPath: null
}

const checkAuthStart = (state, action) => {
	return updateObject(state, {
		loading: true,
		error: null
	});
}

const checkAuthSuccess = (state, action) => {
	return updateObject(state, {
		user: action.user,
		loading: false,
		authenticated: true,
		error: null
	});
}


const loginSuccess = (state, action) => {
	return updateObject(state, {
		authenticated: true,
		loading: false,
		user: action.user
	});
}

const loginStart = (state, action) => {
	return updateObject(state , {
		user: null,
		authenticated: false,
		loading: true
	})
}

const loginFail = (state, action) => {
	return updateObject(state, {
		user: null,
		authenticated: false,
		error: action.error,
		loading: false,
		authRedirectPath: '/login'
	});
}

const authLogout = (state, action) => {
	return updateObject(state, {...initialState});
}


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
		case actionTypes.LOGIN_START: return loginStart(state,action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);

        case actionTypes.CHECK_AUTH_START: return checkAuthStart(state, action);
        case actionTypes.CHECK_AUTH_SUCCESS: return checkAuthSuccess(state, action);

		case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
		
        default:
            return state;
    }
};

export default reducer;