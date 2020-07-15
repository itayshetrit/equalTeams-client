import * as actionTypes from '../../actions/products/actionTypes'
import { updateObject } from '../../utilities'

const initialState = {
	user: null,
	authenticated: false,
	error: null,
	loading: false,
	authRedirectPath: null
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
const authFail = (state, action) => {
	return updateObject(state, {
		user: null,
		authenticated: false,
		error: action.error,
		loading: false,
		authRedirectPath: '/login'
	});
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_ACTION_START: return authUserInfoStart(state, action);
        case actionTypes.PRODUCT_ACTION_SUCCESS: return authUserInfoSuccess(state, action);
        case actionTypes.PRODUCT_ACTION_FAIL: return authFail(state, action);
            

        default:
            return state;
    }
};

export default reducer;