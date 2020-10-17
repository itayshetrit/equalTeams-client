import axios from "axios";
import ServerRoutes from "./routes/index";

let headers = { Authorization: 'Bearer ' + localStorage['gal'] }
const getClientById = async (id) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['gal'] }
        const { status, data, error } = await axios.get(ServerRoutes.crudClient + id, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data.error,
            status: error.response.status
        };
    }
};

const editUserById = async (id, body) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['gal'] }
        const { status, data, error } = await axios.patch(ServerRoutes.crudUser + id, body, { headers });
        return { status, data, error };
    } catch (error) {
        // console
        return {
            error: error.response.data,
            status: error.response.status
        };
    }
};

const deleteClientById = async (id) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['gal'] }
        const { status, data, error } = await axios.delete(ServerRoutes.crudClient + id, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data,
            status: error.response.status
        };
    }
};


const addUser = async (body) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['gal'] }
        const { status, data, error } = await axios.post(ServerRoutes.crudUser, body, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data.error,
            status: error.response.status
        };
    }
};

const clientApi = {
    getClientById,
    deleteClientById,
    editUserById,
    addUser
};

export default clientApi;
