import axios from 'axios';

interface FetchSeating {
    name: string;
    data: {
        classrooms: Record<string, any>;
    };
}

const fetchSeating = async (name: string): Promise<FetchSeating> => {
    const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

    if (!BACKEND_URI) {
        throw new Error("The Backend URI is not valid");
    }

    try {
        const { data } = await axios.get<FetchSeating>(`${BACKEND_URI}/data/${name}`);
        return data;
    } catch (error) {
        console.error("Error fetching seating data:", error);
        return { name, data: { classrooms: {} } }; // Return a safe default
    }
};

export default fetchSeating;
