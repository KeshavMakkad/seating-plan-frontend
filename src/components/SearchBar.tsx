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
        onSearch(query.trim());
    };

    const clearSearch = () => {
        setSearchQuery("");
        onSearch("");
    };

    return (
        <div className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[700px] flex justify-center transition-all duration-300 px-5">
            <TextField
                variant="outlined"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                fullWidth
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
                sx={{
                    "& .MuiOutlinedInput-root": {
                        border: "1px solid var(--text-secondary)",
                    },
                    "& .MuiOutlinedInput-input": {
                        padding: "10px 0px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "16px",
                        color: "var(--text-secondary)"
                    },
                }}
                  
            />
        </div>
    );
};

export default SearchBar;
