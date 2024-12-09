const db = require("../db/dbConfig");

exports.getAppliances = (req, res) => {
    const search = `%${req.query.search || ""}%`;
    db.all("SELECT * FROM appliance_types WHERE type_name LIKE ?", [search], (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(rows);
    });
};
