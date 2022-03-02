const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  async connectDB() {
    await dbConnection();
  }

  routes() {
    this.app.use("/users", require("../routes/users"));
    this.app.use("/humans", require("../routes/humans"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Run server on port: ", this.port);
    });
  }
}

module.exports = Server;
