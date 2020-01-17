const express = require("express");

const {
  get,
  insert,
  update,
  remove,
  getProjectActions
} = require("../data/helpers/projectModel");
const router = express.Router();

module.exports = router;
