const express = require("express");
// const mongoose = require("mongoose");
const connectDB = require("./config/db");
const corsMiddleware = require("./config/cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Call the connectDB function to establish the connection
connectDB();
// mongoose.connect("mongodb+srv://hammadkhalil04:N6w3EPoTi5k0ddHp@cluster0.g08qzv6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// Middleware
// Apply CORS middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/notifications", notificationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
