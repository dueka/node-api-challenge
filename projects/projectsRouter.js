const express = require("express");

const {
  get,
  insert,
  update,
  remove,
  getProjectActions
} = require("../data/helpers/projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        error: "The users information could not be retreived"
      });
    });
});

module.exports = router;
