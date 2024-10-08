const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

  name: { type: String, required: true },

  description: String,
  
  status: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
