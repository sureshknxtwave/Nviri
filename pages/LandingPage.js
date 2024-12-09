import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LocationDropdown from "../components/LocationDropdown";
import SearchBar from "../components/SearchBar";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { fetchTechnicians } from "../services/technicianService";

const LandingPage = () => {
    const [technicians, setTechnicians] = useState([]);

    const handleSearch = (query) => {
        fetchTechnicians(query).then(data => setTechnicians(data));
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <h1>Find Technicians Near You</h1>
                <LocationDropdown />
                <SearchBar onSearch={handleSearch} />
                <FeaturedCarousel technicians={technicians} />
            </div>
        </div>
    );
};

export default LandingPage;
