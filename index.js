const express = require("express");
const mongoose = require("mongoose");
const rummersRouter = require("./routes/rumorsRoute");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(" you are on the home page");
});

mongoose
  .connect("mongodb://localhost:27017/rumourDB")
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

app.use("/rumors", rummersRouter);

app.listen(5000, () => {
  console.log("The servier is running on port 5000");
});
