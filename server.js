const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("./projects/projectsRouter");
const actionsRouter = require("./actions/actionsRouter");

const server = express();
server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send(`<h3>It's Alive</h3>`);
});

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;
