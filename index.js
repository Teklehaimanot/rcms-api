const express = require("express");
const rummersRouter = require("./routes/rumorsRoute");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(" you are on the home page");
});

app.use("/rumors", rummersRouter);

app.listen(5000, () => {
  console.log("The servier is running on port 5000");
});
