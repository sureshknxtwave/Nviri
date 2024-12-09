import React, { useEffect, useState } from "react";
import { fetchLocations } from "../services/locationService";

const LocationDropdown = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchLocations().then(data => setLocations(data));
    }, []);

    return (
        <select className="form-select">
            {locations.map(location => (
                <option key={location.id} value={location.id}>
                    {location.name}
                </option>
            ))}
        </select>
    );
};

export default LocationDropdown;
