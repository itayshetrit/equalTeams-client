import axios from "axios";
import ServerRoutes from "./routes/index";

let headers;
const getClients = async () => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['bs'] }
        const { status, data, error } = await axios.get(ServerRoutes.getClients, { headers });
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
        headers = { Authorization: 'Bearer ' + localStorage['bs'] }
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
        headers = { Authorization: 'Bearer ' + localStorage['bs'] }
        const { status, data, error } = await axios.delete(ServerRoutes.editUserByID + id, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data,
            status: error.response.status
        };
    }
};

const clientsApi = {
    getClients
};

export default clientsApi;
