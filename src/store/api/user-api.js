import axios from 'axios';
import ServerRoutes from './routes/index';
let headers = { Authorization: 'Bearer ' + localStorage['bs'] }
const login = async (creds) => {
	try {
		headers = { Authorization: 'Bearer ' + localStorage['bs'] }
		const { status, data, error } = await axios.post(ServerRoutes.login, creds)
		return { status, data, error }
	}
	catch (err) {
		console.log(err)
		return {
			error: err.response.data,
			status: err.response.status
		};
	}
}

const checkAuth = async () => {
	try {

		headers = { Authorization: 'Bearer ' + localStorage['bs'] }
		const { status, data, error } = await axios.get(ServerRoutes.checkAuth, { headers });
		return { status, data, error }
	}
	catch (err) {

		return {
			error: err.message,
			status: err.response.status
		};
	}
}


const register = async (body) => {
	try {
		headers = { Authorization: 'Bearer ' + localStorage['bs'] }
		const { status, data, error } = await axios.post(ServerRoutes.register, body, { headers });

		return { status, data, error }
	}
	catch (err) {
		return {
			error: "קיימת שגיאה, יתכן ומספר זה רשום במערכת, פנה למנהל המערכת לעזרה",
			status: err.response.status
		};
	}
}


const logoutAll = async () => {
	try {
		headers = { Authorization: 'Bearer ' + localStorage['bs'] }
		const { status, data, error } = await axios.post(ServerRoutes.logoutAll, null, { headers });
		return { status, data, error }
	}
	catch (err) {
		return {
			error: "קיימת שגיאה, פנה למנהל המערכת לעזרה",
			status: err.response.status
		};
	}
}


const userApi = {
	login,
	checkAuth,
	register,
	logoutAll
}

export default userApi;