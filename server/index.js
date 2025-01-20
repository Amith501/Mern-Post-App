const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./util/db.js");
const cors = require("cors");
const UserRoute = require("./routes/UserRoute.js"); // Import User routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Apply CORS middleware
app.use(express.json()); // Parse JSON body

// Routes
app.use("/api/users", UserRoute); // Use routes

// Connect to the database and start the server
connectDb(process.env.MONGO_URi)
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  });
