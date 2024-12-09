const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const locationRoutes = require("./routes/locations");
const applianceRoutes = require("./routes/appliances");
const technicianRoutes = require("./routes/technicians");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/locations", locationRoutes);
app.use("/appliances", applianceRoutes);
app.use("/technicians", technicianRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
