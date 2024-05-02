import express from "express";
const router = express.Router();
import * as notificationController from "../controllers/notificationController.js";

// Get all notifications
router.get("/", notificationController.getAllNotifications);

// Get a single notification by ID
router.get("/:id", notificationController.getNotificationById);

// Create a new notification
router.post("/", notificationController.createNotification);

// Update a notification by ID
router.put("/:id", notificationController.updateNotification);

// Delete a notification by ID
router.delete("/:id", notificationController.deleteNotification);

export default router;
