exports.getLocations = (req, res) => {
    // Dummy data for locations
    const locations = [
        { id: 1, name: "New York" },
        { id: 2, name: "Los Angeles" },
        { id: 3, name: "Chicago" }
    ];
    res.json(locations);
};
