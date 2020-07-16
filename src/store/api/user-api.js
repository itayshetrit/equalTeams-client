import axios from 'axios';
import ServerRoutes from './routes/index';
let headers = { Authorization: 'Bearer ' + localStorage['node'] }
const login = async (creds) => {
	try {
		headers = { Authorization: 'Bearer ' + localStorage['node'] }
		const { status, data, error } = await axios.post(ServerRoutes.login, creds)
		return { status, data, error }
	}
	catch (err) {
		return {
			error: err.response.data,
			status: err.response.status
		};
	}
}

const checkAuth = async () => {
	try {

		headers = { Authorization: 'Bearer ' + localStorage['node'] }
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
		headers = { Authorization: 'Bearer ' + localStorage['node'] }
		const { status, data, error } = await axios.post(ServerRoutes.register, body, { headers });

		return { status, data, error }
	}
	catch (err) {
		return {
			error: "קיימת שגיאה, יתכן ומייל זה רשום במערכת, פנה למנהל המערכת לעזרה",
			status: err.response.status
		};
	}
}


const logoutAll = async () => {
	try {
		headers = { Authorization: 'Bearer ' + localStorage['node'] }
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
const editProductStatus1 = async (ccc) => {
	try {
		headers = { Authorization: 'Bearer ' + localStorage['node'] }

		const { status, data, error } = await axios.patch(ServerRoutes.editProduct, ccc, { headers });

		return { status, data, error };
	} catch (error) {
		return {
			error: error.response.data,
			status: error.response.status
		};
	}
};

const checkForUpdates1 = async () => {
	try {
		headers = { Authorization: 'Bearer ' + localStorage['node'] }

		const { status, data, error } = await axios.get(ServerRoutes.checkForUpdates, { headers });

		return { status, data, error };
	} catch (error) {
		return {
			error: error.response.data,
			status: error.response.status
		};
	}
};

const upAndDown = async (body) => {
	try {
		headers = { Authorization: 'Bearer ' + localStorage['node'] }
		console.log(body)
		const { status, data, error } = await axios.patch(ServerRoutes.upAndDown, body, { headers });

		return { status, data, error };
	} catch (error) {
		return {
			error: error.response.data,
			status: error.response.status
		};
	}
};


const userApi = {
	login,
	checkAuth,
	register,
	logoutAll,
	editProductStatus1,
	checkForUpdates1,
	upAndDown
}

export default userApi;