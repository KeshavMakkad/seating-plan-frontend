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
        <div className="w-full max-w-xs">
            <TextField
                variant="outlined"
                placeholder="Search by name or roll number..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full bg-white rounded-md shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-400"
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
