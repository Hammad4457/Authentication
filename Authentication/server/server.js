import express from "express";
import connectDB from "./config/DB.js";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/tasksRoutes.js";
import notificationRouter from "./routes/notificationRoutes.js";
import multer from "multer";
import path from "path"; // Import the path module

const app = express();
const PORT = process.env.PORT || 3000;

// Call the connectDB function to establish the connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/Images"); // Specify the destination folder for file uploads
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.filename + "-" + Date.now() + path.extname(file.originalname)
    ); // Specify the file name
  },
});

const upload = multer({ storage: storage });

// Routes
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/notifications", notificationRouter);

app.post("/tasks/addTasks", upload.single("file"), (req, res) => {
  console.log(req.file);
});

// Route to handle file uploads for tasks
// app.post("/api/tasks/addTasks", upload.single("attachment"), (req, res) => {
//   try {
//     console.log(req.file);
//     // Handle file upload here
//     // `req.file` contains information about the uploaded file
//     const filename = req.file.filename;
//     const fileUrl = `http://your-server.com/uploads/${filename}`; // Modify the URL as per your server configuration
//     res.json({
//       message: "File uploaded successfully",
//       filename: filename,
//       url: fileUrl,
//     });
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     res.status(500).json({ message: "Error uploading file" });
//   }
// });

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
