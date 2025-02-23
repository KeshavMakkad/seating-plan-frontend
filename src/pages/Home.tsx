import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import get_seating from "../context/fetchNames";
import HomeHeader from "./../components/HomeHeader";

function Home() {
    const [allNamesList, setAllNamesList] = useState<any[]>([]); // Store full data
    const [namesList, setNamesList] = useState<any[]>([]); // Store filtered data
    const [isLoading, setIsLoading] = useState(true);
    // const [selectedSort, setSelectedSort] = useState("Date");
    // const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await get_seating();
            setAllNamesList(data); // Store original data
            setNamesList(data); // Initialize filtered list
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const sortSeatingPlans = (sortBy: string, order: string) => {
        let sortedList = [...allNamesList]; // Always sort from original dataset

        if (sortBy === "Name") {
            sortedList.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "Date") {
            sortedList.sort((a, b) => a.date.localeCompare(b.date));
        } else if (sortBy === "Recent") {
            sortedList.sort((a, b) => Number(b.date) - Number(a.date));
        } else if (sortBy === "Next") {
            const now = Date.now();
            sortedList = sortedList
                .filter((item) => Number(item.date) > now)
                .sort((a, b) => Number(a.date) - Number(b.date));
        }

        if (order === "desc") {
            sortedList.reverse();
        }

        setNamesList(sortedList);
    };

    const handleSearch = (query: string) => {
        const filteredList = allNamesList.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setNamesList(filteredList);
    };
    

    return (
        <div className="min-h-screen bg-[var(--background-color)] text-white p-6">
            <HomeHeader sortSeating={sortSeatingPlans} onSearch={handleSearch} />

            {isLoading ? (
                <div className="flex flex-col items-start ml-10 mt-6">
                    <div className="w-8 h-8 border-4 border-[var(--border-color)] border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-3 text-gray-400">Fetching seating data...</p>
                </div>
            ) : (
                <ul className="w-full mt-6 bg-[var(--surface-color)] border border-[var(--border-color)] rounded-lg shadow-lg p-4 space-y-2">
                    {namesList?.map((item: any, index: number) => (
                        <li key={index} className="w-full">
                            <Link
                                to={`/seatingplan/${encodeURIComponent(item.name)}`}
                                className="block w-full text-left bg-[var(--background-color)] hover:bg-gray-600 text-[var(--primary-color)] transition p-3 rounded-lg border border-[var(--border-color)] font-semibold"
                            >
                                {item.name} - {new Date(Number(item.date)).toLocaleDateString()}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;
