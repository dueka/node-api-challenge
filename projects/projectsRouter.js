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

router.get("/:id/actions", (req, res) => {
  getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the posts for the users"
      });
    });
});

router.post("/", (req, res) => {
  const newProject = {
    name: "Complete the introductory course on express",
    description: "Go from zero to hero"
  };
  insert(newProject)
    .then(data => {
      res.status(201).json({ data, message: "Project Created" });
    })
    .catch(error => {
      res.status(500).json({
        message: "Error adding project"
      });
    });
});

module.exports = router;
