import React from "react";
import TechnicianCard from "./TechnicianCard";

const FeaturedCarousel = ({ technicians }) => {
    return (
        <div className="d-flex overflow-auto">
            {technicians.map(technician => (
                <TechnicianCard key={technician.id} technician={technician} />
            ))}
        </div>
    );
};

export default FeaturedCarousel;
