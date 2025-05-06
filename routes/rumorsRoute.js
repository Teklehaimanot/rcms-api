const express = require("express");
// const { getAllRumours } = require("../constrollers/rumorsController");
rummersController = require("../constrollers/rumorsController");
const rummersRouter = express.Router();

rummersRouter.get("/", rummersController.getAllRumours);
rummersRouter.get("/:id", rummersController.getRumoursById);
module.exports = rummersRouter;
