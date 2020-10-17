import axios from "axios";
import ServerRoutes from "./routes/index";

let headers;
const setGuestTable = async (body) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['gal'] }
        const { status, data, error } = await axios.patch(ServerRoutes.setGuestTable, body, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data.error,
            status: error.response.status
        };
    }
};

const editGuestByID = async (body, id) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['gal'] }
        const { status, data, error } = await axios.patch(ServerRoutes.crudGuest + id, body , { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data,
            status: error.response.status
        };
    }
};

const deleteGuest = async ( id) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['gal'] }
        const { status, data, error } = await axios.delete(ServerRoutes.crudGuest + id, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data,
            status: error.response.status
        };
    }
};

const guestsApi = {
    setGuestTable,
    editGuestByID,
    deleteGuest
};

export default guestsApi;
