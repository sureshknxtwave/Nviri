const db = require("../db/dbConfig");

exports.getFeaturedTechnicians = (req, res) => {
    db.all("SELECT * FROM technicians", [], (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(rows);
    });
};

exports.loginTechnician = (req, res) => {
    const { email, password } = req.body;
    db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
        if (err) res.status(500).json({ error: err.message });
        else if (row) res.json({ message: "Login successful", user: row });
        else res.status(401).json({ message: "Invalid credentials" });
    });
};
