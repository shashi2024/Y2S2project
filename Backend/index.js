const express = require("express");
const dbConnection = require("./config/db");
const campaignsRoutes = require("./routes/campaigns");
const feedbackRoutes = require("./routes/feedbackRoutes"); // Make sure this is the correct path to your feedback routes file
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: true, credentials: true }));

// Database Connection
dbConnection();

// Middleware for parsing application/json
app.use(bodyParser.json());
// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Root endpoint to check if the server is running
app.get("/", (req, res) => res.send("Hello, the server is running.."));

// Routes
app.use("/api/campaigns", campaignsRoutes);
app.use("/api/feedback", feedbackRoutes); // This sets up the feedback routes under the '/api/feedback' path

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
