import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
  body: {
    type: String,
    required: true // Ensure body is required
  },
  createdAt: {
    type: String,
    required: true
  }
});

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;