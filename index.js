const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(" you are on the home page");
});

app.listen(5000, () => {
  console.log("The servier is running on port 5000");
});
