import mongoose from 'mongoose';

//Defining the Schema
const AIchatSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['user', 'assistant'], // Restricting values to 'user' or 'assistant'
    required: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now, // Automatically set the current date/time
  },
});

//Export the Model
export default mongoose.model('AIchat', AIchatSchema);
