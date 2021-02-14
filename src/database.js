const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo/server-api-mongo")
  .then((db) => console.log("DB is connected to", db.connection.host))
  .catch((error) => console.error(error));
