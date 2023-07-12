// server.js
const express = require("express");
// const mongoose = require("mongoose");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const app = express();
const cors = require("cors");

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", (req, res, next) => {
  console.log("Middleware specific to /api/book route called");
  next(); // Call next() to pass control to the next middleware or route handler
});
app.use("/api/books", bookRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
