const mongoose = require('mongoose');

const URI = process.env.MONGO_DB_URI;

async function connectDB() {
  try {
    await mongoose.connect(URI);

    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectDB;
