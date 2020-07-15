import axios from "axios";
import ServerRoutes from "./routes/index";

let headers = { Authorization: 'Bearer ' + localStorage['node'] }
const getAllUsers = async (date) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['node'] }
        const query = "?date=" + date
        const { status, data, error } = await axios.get(ServerRoutes.getUsers, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data.error,
            status: error.response.status
        };
    }
};

const editUserByID = async (flag, id) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['node'] }
        const { status, data, error } = await axios.patch(ServerRoutes.editUserByID + id, { flag }, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data,
            status: error.response.status
        };
    }
};

const deleteUserByID = async ( id) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['node'] }
        const { status, data, error } = await axios.delete(ServerRoutes.editUserByID + id, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data,
            status: error.response.status
        };
    }
};

const usersApi = {
    getAllUsers,
    editUserByID,
    deleteUserByID
};

export default usersApi;
