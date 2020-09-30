import axios from "axios";
import ServerRoutes from "./routes/index";

let headers = { Authorization: 'Bearer ' + localStorage['bs'] }
const getClientById = async (id) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['bs'] }
        const { status, data, error } = await axios.get(ServerRoutes.crudClient + id, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data.error,
            status: error.response.status
        };
    }
};

const editClientById = async (body, id) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['bs'] }
        const { status, data, error } = await axios.patch(ServerRoutes.crudClient + id, body, { headers });
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
        headers = { Authorization: 'Bearer ' + localStorage['bs'] }
        const { status, data, error } = await axios.delete(ServerRoutes.crudClient + id, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data,
            status: error.response.status
        };
    }
};


const addGuest = async (body) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['bs'] }
        const { status, data, error } = await axios.post(ServerRoutes.crudGuest, body, { headers });
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
    editClientById,
    addGuest
};

export default clientApi;
