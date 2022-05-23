const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CustomerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

CustomerSchema.pre('save', async function (next) {
  const customer = this;
  try {
    if (!customer.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(customer.password, salt);

    customer.password = hash;
  } catch (error) {
    next(error);
  }
});

CustomerSchema.methods.comparePassword = async function (candidatePassword) {
  const customer = this;

  return bcrypt.compare(candidatePassword, customer.password);
};

CustomerSchema.virtual('profile').get(function () {
  const { name, username, _id } = this;

  return { name, username, _id };
});

module.exports = mongoose.model('Customer', CustomerSchema);
