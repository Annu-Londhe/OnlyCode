const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('write your MongoDB URL here I cant share these for security purpose', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
