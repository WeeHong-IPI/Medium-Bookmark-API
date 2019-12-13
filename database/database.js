require("dotenv/config");
const mongoose = require("mongoose");

module.exports = () => {
  mongdbConnection = mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("connected", () => {
    console.log(connected("Mongoose default connection is open."));
  });

  mongoose.connection.on("error", err => {
    console.log(
      error("Mongoose default connection has occured " + err + " error.")
    );
  });

  mongoose.connection.on("disconnected", () => {
    console.log(disconnected("Mongoose default connection is disconnected."));
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        "Mongoose default connection is disconnected due to application termination."
      );
    });
  });
};
