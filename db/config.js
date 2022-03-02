const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[db] Online");
  } catch (error) {
    console.log(error);
    throw new Error("[db] error");
  }
};

module.exports = { dbConnection };
