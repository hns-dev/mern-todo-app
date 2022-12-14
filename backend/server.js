require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todos");

const port = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/todos", todoRoutes);

// serve frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(
    path.resolve(__dirname, "../", "frontend", "build", "index.html")
  )
);

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () =>
      console.log(`Connected to db & listneing for requests`)
    );
  })
  .catch((err) => console.log(err));
