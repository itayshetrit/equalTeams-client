import * as actionTypes from '../../actions/auth/actionTypes';
import { updateObject } from '../../utilities';
const initialState = {
	user: null,
	authenticated: false,
	error: null,
	loading: false
}

const checkAuthSuccess = (state, action) => {
	return updateObject(state, {
		user: action.user,
		loading: false,
		authenticated: true,
		error: null
	});
}

const authSuccess = (state, action) => {
	return updateObject(state, {
		user: action.user,
		authenticated: true,
		loading: false,
		error:null
	});
}

const authFail = (state, action) => {
	return updateObject(state, {
		user: null,
		authenticated: false,
		error: action.error,
		loading: false
	});
}

const authActionStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}


const registerSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
		error: null
    })
}
const registerFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

const localLogoutSuccess = (state, action) => {
    return updateObject(state, {...initialState} )
}
const localLogoutFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}




const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
		
		case actionTypes.LOGIN_START: return authActionStart(state,action);
        case actionTypes.AUTH_FAILED: return authFail(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
		
        case actionTypes.CHECK_AUTH_START: return authActionStart(state, action);
		case actionTypes.CHECK_AUTH_SUCCESS: return checkAuthSuccess(state, action);
		
		case actionTypes.REGISTER_START: return authActionStart(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
		case actionTypes.REGISTER_FAIL: return registerFailed(state, action);
		
		case actionTypes.LOCAL_LOGOUT_START: return authActionStart(state, action);
        case actionTypes.LOCAL_LOGOUT_SUCCESS: return localLogoutSuccess(state, action);
		case actionTypes.LOCAL_LOGOUT_FAIL: return localLogoutFailed(state, action);

        default:
            return state;
    }
};

export default reducer;