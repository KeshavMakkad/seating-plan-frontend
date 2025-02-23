import axios from "axios";

const fetchNames = async (): Promise<any[]> => {
    const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
    try {
        if (!BACKEND_URI) {
            console.error("The Backend URI is not valid");
            return []; // ✅ Return an empty array if URI is invalid
        }
        
        const response = await axios.get(`${BACKEND_URI}/name/`);
        return Array.isArray(response.data) ? response.data : []; // ✅ Ensure an array is returned
    } catch (error) {
        console.error("Error in fetching names list:", error);
        return []; // ✅ Return an empty array in case of an error
    }
};

export default fetchNames;
