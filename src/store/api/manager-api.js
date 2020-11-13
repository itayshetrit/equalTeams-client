import axios from "axios";
import ServerRoutes from "./routes/index";

let headers = { Authorization: 'Bearer ' + localStorage['gal'] }

const addTeam = async (body) => {
    try {
        headers = { Authorization: 'Bearer ' + localStorage['gal'] }
        const { status, data, error } = await axios.patch(ServerRoutes.addTeam, body, { headers });
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data.error,
            status: error.response.status
        };
    }
};



const clientApi = {
    addTeam
};

export default clientApi;
