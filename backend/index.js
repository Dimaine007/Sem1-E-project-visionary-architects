const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to your SQL database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "visionary_architecture"
});

// Test DB connection
db.connect(err => {
    if (err) throw err;
    console.log("Connected to database");
});

// API to get all projects
app.get("/projects", (req, res) => {
    db.query("SELECT * FROM Projects", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Start server
app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});
