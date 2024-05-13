import express from "express";
// import mongoose from "mongoose";
import connectDB from "./config/DB.js";
// import corsMiddleware from "./config/Cors.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

// Call the connectDB function to establish the connection
connectDB();

// Middleware
// Apply CORS middleware
// app.use(corsMiddleware);
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

console.log("Hammad");
console.log("Here");

// Routes
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/tasksRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/notifications", notificationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
