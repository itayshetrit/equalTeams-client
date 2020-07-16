// const devURL = "https://shopping-list-itay.herokuapp.com/";
// const devURL = process.env.URL;
const devURL = "http://localhost:8000/";
const ServerRoutes = {
	
	// Auth
	register: devURL+"users", //post
	logoutAll: devURL+"users/logoutAll", //post
	
	login: devURL+"users/login", //post
	checkAuth: devURL+"users/checkAuth/me", //get
	
	// User
	upAndDown: devURL+"users/me/upanddown",
	editProduct: devURL+"users/me/update",
	checkForUpdates: devURL+"users/me/changes",
	editProductAmount: devURL+"users/editProductAmount/",

	
	// logout: devURL+"users/logout", //post
	// getUserByID: devURL+"users/:id", //get
	// editMyUser: devURL+"users/me/update", //patch
	// deleteMyself: devURL+"users/me/remove", //delete
	// getMyUser: devURL+"users/me", //get

}

export default ServerRoutes;