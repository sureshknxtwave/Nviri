import React from "react";

const TechnicianCard = ({ technician }) => {
    return (
        <div className="card">
            <img src={technician.photo_url} alt={technician.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{technician.name}</h5>
                <p className="card-text">{technician.specialization}</p>
                <p>Rating: {technician.rating}</p>
                <button className="btn btn-primary">Contact</button>
            </div>
        </div>
    );
};

export default TechnicianCard;
