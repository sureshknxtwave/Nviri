import React from "react";

const SearchBar = ({ onSearch }) => {
    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            className="form-control"
            placeholder="Search appliance type..."
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
