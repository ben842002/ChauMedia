import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, Icon } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm("");
        }
    }

    return (
        <Paper // equivalent to form in HTML
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
                mr: { sm: 5 }
            }}
        >
            <input
                className="search-bar"
                placeholder="Search"
                value={searchTerm}
                onChange={updateSearchTerm}    
            />

            <IconButton type="submit" sx={{ p: "10px", color: "red"}}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar