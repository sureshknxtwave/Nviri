const sqlite3 = require("sqlite3").verbose();

// Initialize SQLite Database
const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

// Create Tables
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS technicians (
            technician_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            photo TEXT,
            specialisation TEXT,
            rating REAL,
            description TEXT
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS appliance_types (
            appliance_id INTEGER PRIMARY KEY AUTOINCREMENT,
            type_name TEXT NOT NULL UNIQUE
        );
    `);
});

module.exports = db;
