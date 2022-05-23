const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  full: String,
  thumb: String,
}, {
  timestamps: false,
  versionKey: false,
});

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    default: 10,
  },
  category: {
    type: String,
    enum: ['CAT', 'DOG', 'RABBIT', 'STINGRAY'],
    required: true,
  },
  status:  {
    type: String,
    enum: ['AVAILABLE', 'CHECKEDOUT'],
    default: 'AVAILABLE',
  },
  photo: PhotoSchema,
  dueDate: {
    type: Date,
  },
  inCareOf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  }
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Pet', PetSchema);
