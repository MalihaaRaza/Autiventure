const express = require("express");
const path = require("path");
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "auti-venturee-main", "dist")));

// Define a route to serve your React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "auti-venturee-main", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
