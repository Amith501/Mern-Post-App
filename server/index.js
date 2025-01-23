//Connect to mongodb database(locally)
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const UserRoute = require("./routes/UserRoutes.js");
const mongoose = require("mongoose");
dotenv.config();
PORT = 4000;
//middle ware
app.use(cors());
app.use(express.json());
app.use("/api/users", UserRoute);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(PORT, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Failed to connect", error));
