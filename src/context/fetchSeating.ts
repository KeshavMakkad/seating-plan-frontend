import axios from 'axios';

interface FetchSeating {
    name: string;
    data: {
        classrooms: Record<string, any>;
    };
    errorCode?: number; // Store HTTP error code
}

const fetchSeating = async (name: string): Promise<FetchSeating> => {
    const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

    if (!BACKEND_URI) {
        return { name, data: { classrooms: {} }, errorCode: 500 }; // 500 for internal error
    }

    try {
        const { data } = await axios.get<FetchSeating>(`${BACKEND_URI}/data/${name}`);
        return data;
    } catch (error: any) {
        console.error("Error fetching seating data");

        return {
            name,
            data: { classrooms: {} },
            errorCode: error.response?.status || 500, // Return actual status code or default to 500
        };
    }
};

export default fetchSeating;
