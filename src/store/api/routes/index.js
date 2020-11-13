// const devURL = "https://be-simple-api.herokuapp.com/";
const devURL = "http://localhost:8000/";
const ServerRoutes = {

	// Auth
	register: devURL + "auth/register", //post
	logoutSpecific: devURL + "auth/logoutSpecific", //post	
	logoutAll: devURL + "auth/logoutAll", //post	
	login: devURL + "auth/login", //post
	checkAuth: devURL + "auth/checkAuth", //get

	addTeam: devURL + "manager/addTeam",

	// Clients
	// editGuestByID
	// editGuestByID: devURL+"guests/",	//crud
	getUsers: devURL + "players/usersByTeam/",	//get
	crudUser: devURL + "players/",	//crud
	elections: devURL + "elections",



	setGuestTable: devURL + "guests/setGuestTable",	//crud
	getGuests: devURL + "guests",	//crud
	getTablesGuests: devURL + "guests/tables",	//crud
	editMyUser: devURL + "clients/me/update", //patch

	getTables: devURL + "tables",
	loadTables: devURL + "tables",	//post

}

export default ServerRoutes;