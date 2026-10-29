const mongoose = require("mongoose");

let connectionPromise;

const connectedDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL environment variable is required");
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("DB is Connected Successfully");
        return mongoose.connection;
      })
      .catch((error) => {
        connectionPromise = null;
        throw error;
      });
  }

  return connectionPromise;
};

module.exports = connectedDB;
