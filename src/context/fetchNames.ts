import axios from "axios";

const fetchNames = async (): Promise<void> => {
    const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
    try{
        if(!BACKEND_URI){
            // console.log("The Backend URI is not valid");
            console.error("The Backend URI is not valid");
        }
        const namesList = await axios.get(BACKEND_URI + '/name/');
        return namesList.data;
    }
    catch(error: any){
        console.log("Error in fetching names list: ", error)
    }
};

export default fetchNames;