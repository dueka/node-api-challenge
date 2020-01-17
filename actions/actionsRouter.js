const express = require("express");
const {
  get,
  insert,
  update,
  remove,
  getProjectActions
} = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        error: "The users information could not be retreived"
      });
    });
});
module.exports = router;
