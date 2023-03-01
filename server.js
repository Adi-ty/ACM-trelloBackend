require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Using Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//Importing Routes
const userRoutes = require("./routes/userRoutes");

//Using Routes
app.use("/api/v1", userRoutes);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server listening 🎵 on port ${process.env.PORT}`);
});
