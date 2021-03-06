const devURL = "ec2-18-224-29-77.us-east-2.compute.amazonaws.com:8000/";
// const devURL = "http://localhost:8000/";
const ServerRoutes = {

	// Auth
	register: devURL + "auth/register", //post
	logoutSpecific: devURL + "auth/logoutSpecific", //post	
	logoutAll: devURL + "auth/logoutAll", //post	
	login: devURL + "auth/login", //post
	checkAuth: devURL + "auth/checkAuth", //get

	addTeam: devURL + "manager/addTeam",

	getUsers: devURL + "players/usersByTeam/",	//get
	crudUser: devURL + "players/",	//crud

	elections: devURL + "elections"

}

export default ServerRoutes;