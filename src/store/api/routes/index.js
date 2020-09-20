// const devURL = "https://the-wedding-itay.herokuapp.com/";
const devURL = "http://localhost:8000/";
const ServerRoutes = {
	
	// Auth
	register: devURL+"users/add", //post
	logoutAll: devURL+"users/logoutAll", //post	
	login: devURL+"users/login", //post
	checkAuth: devURL+"users/checkAuth/me", //get
	
	// Clients
	getClients: devURL+"users",	//get
	crudClient: devURL+"guests/",	//crud
	editMyUser: devURL+"clients/me/update", //patch

	loadTables: devURL+"tables",	//post
	
}

export default ServerRoutes;