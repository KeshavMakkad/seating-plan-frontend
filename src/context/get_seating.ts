import axios from "axios";

const get_seating = async (): Promise<void> => {
    const SEATING_URI: string | undefined = import.meta.env.VITE_SEATING_URI;

    if (!SEATING_URI) {
        console.error("VITE_SEATING_URI is not defined in .env.local");
        return;
    }

    try {
        const response = await axios.get(SEATING_URI);
        console.log("Seating Data:", response.data);
    } catch (error) {
        console.error("Error fetching seating:", error);
    }
};

export default get_seating;
