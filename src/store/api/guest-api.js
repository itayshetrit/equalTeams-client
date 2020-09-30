import axios from "axios";
import ServerRoutes from "./routes/index";

let headers;
const setGuestTable = async (body) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['bs'] }
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
    console.log(body)
    console.log(id)
    try {
        headers = { Authorization: 'Bearer ' + localStorage['bs'] }
        const { status, data, error } = await axios.patch(ServerRoutes.crudGuest + id, body , { headers });
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

const guestsApi = {
    setGuestTable,
    editGuestByID
};

export default guestsApi;
