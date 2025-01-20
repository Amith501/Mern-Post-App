const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(
      `\n Mongodb Connected DB:Host${ConnectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(error);
    console.error("MongoDb Connection Failed", error);
    process.exit(1);
  }
};

module.exports = connectDb;
