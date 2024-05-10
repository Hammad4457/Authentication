import User from "../models/userModal.js";
import bcrypt from "bcrypt";

// Create a new user
export const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    const token = newUser.createJWT();
    res
      .status(201)
      .json({ newUser: { email: newUser.email, name: newUser.name }, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "Login failed" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "invalid email or pass" });
    }

    const token = user.createJWT();
    res
      .status(200)
      .json({ user: { email: user.email, name: user.name }, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      // Update other user properties here

      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // Find user by ID and delete
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUserByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found, return 404 Not Found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user
    await User.deleteOne({ email });

    // Respond with success message
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
