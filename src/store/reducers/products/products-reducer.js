// import * as actionTypes from '../../actions/products/actionTypes'
// import { updateObject } from '../../utilities'

// const initialState = {
// 	user: null,
// 	authenticated: false,
// 	error: null,
// 	loading: false,
// 	authRedirectPath: null
// }
// const editProdStart = (state, action) => {
// 	return updateObject(state, {
// 		loading: true,
// 		error: null
// 	});
// }

// const editProdSuccess = (state, action) => {

// 	return updateObject(state, {
// 		user: action.user,
// 		loading: false,
// 		authenticated: true,
// 		error: null
// 	});
// }
// const editProdFail = (state, action) => {
// 	return updateObject(state, {
// 		user: null,
// 		authenticated: false,
// 		error: action.error,
// 		loading: false,
// 		authRedirectPath: '/login'
// 	});
// }
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.PRODUCT_ACTION_START: return editProdStart(state, action);
//         case actionTypes.PRODUCT_ACTION_SUCCESS: return editProdSuccess(state, action);
//         case actionTypes.PRODUCT_ACTION_FAIL: return editProdFail(state, action);
            

//         default:
//             return state;
//     }
// };

// export default reducer;