import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import get_seating from "../context/fetchNames";

function Home() {
    const [namesList, setnamesList] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await get_seating();
            setnamesList(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold ml-10">Seating Plan</h1>

            {isLoading ? (
                <div className="flex flex-col items-start ml-10 mt-6">
                    <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-3 text-gray-400">Fetching seating data...</p>
                </div>
            ) : (
                <ul className="w-full mt-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 space-y-2">
                    {namesList?.map((item: any, index: number) => (
                        <li key={index} className="w-full">
                            
                            <Link 
                                to={`/seatingplan/${encodeURIComponent(item.name)}`} 
                                className="block w-full text-left bg-gray-700 hover:bg-gray-600 transition p-3 rounded-lg border border-gray-600 font-semibold"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;
