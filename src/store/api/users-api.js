import axios from "axios";
import ServerRoutes from "./routes/index";

let headers;
const getUsers = async () => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['gal'] }
        const { status, data, error } = await axios.get(ServerRoutes.getUsers, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data.error,
            status: error.response.status
        };
    }
};

const usersApi = {
    getUsers
};

export default usersApi;
