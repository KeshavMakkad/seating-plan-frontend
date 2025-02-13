import axios from 'axios';

interface FetchSeating {
    name: string;
}

const fetchSeating = async (name: string): Promise<FetchSeating> => {
    const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

    if (!BACKEND_URI) {
        throw new Error("The Backend URI is not valid"); // Ensures a proper error is thrown
    }

    try {
        const { data } = await axios.get<FetchSeating>(`${BACKEND_URI}/data/${name}`);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error in fetching seating data:", error.message);
        } else {
            console.error("An unknown error occurred.");
        }

        return { name: "Unknown" }; // Return a default object instead of `undefined`
    }
};

export default fetchSeating;
