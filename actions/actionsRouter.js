const express = require("express");
const {
  get,
  insert,
  update,
  remove,
  getProjectActions
} = require("../data/helpers/actionModel");

const router = express.Router();

module.exports = router;
