import axios from "axios";

export const fetchTechnicians = async (query) => {
    const response = await axios.get(`http://localhost:5000/technicians?search=${query}`);
    return response.data;
};
