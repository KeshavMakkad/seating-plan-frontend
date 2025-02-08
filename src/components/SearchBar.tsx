import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    const clearSearch = () => {
        setSearchQuery("");
        onSearch("");
    };

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center my-4 z-50">
            <TextField
                variant="outlined"
                placeholder="Search by name or roll number..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full max-w-4xl bg-white rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon className="text-gray-500" />
                        </InputAdornment>
                    ),
                    endAdornment: searchQuery && (
                        <InputAdornment position="end">
                            <IconButton onClick={clearSearch} edge="end">
                                <ClearIcon className="text-gray-500 hover:text-red-500 transition-colors duration-200" />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default SearchBar;
