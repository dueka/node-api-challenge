const express = require("express");
const Action = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  Action.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        message: "There is an error retrieving the actions"
      });
    });
});

router.get("/:id", validateProjectId, (req, res) => {
  const id = req.params.id;
  Action.get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an erorr getting access"
      });
    });
});

router.post("/", (req, res) => {
  const newAction = {
    project_id: Number(req.body.project_id),
    description: req.body.description,
    notes: req.body.nbtes
  };
  Action.insert(newAction)
    .then(action => {
      res.status(201).json({
        data,
        message: "Action successfully added"
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Unable to add action"
      });
    });
});

router.put("/:id", validateProjectId, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Action.update(id, changes)
    .then(data => {
      res.status(200).json({
        message: "Action updated"
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error updating action details"
      });
    });
});

// Middleware
function validateProjectId(req, res, next) {
  const id = Number(req.params.id);
  Action.get(id)
    .then(data => {
      console.log(data);
      if (data) {
        next();
      } else {
        res.status(400).json({
          message: "Action id not valid"
        });
      }
    })
    .catch(error => {
      res.status(404).json({
        message: "ID not available"
      });
    });
}
module.exports = router;
