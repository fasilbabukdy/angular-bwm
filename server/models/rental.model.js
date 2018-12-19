const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      lowercase: true
    },
    street: {
      type: String,
      required: true,
      lowercase: true
    },
    category: {
      type: String,
      required: true,
      lowercase: true
    },
    image: {
      type: String,
      required: true,
      lowercase: true
    },
    bedrooms: {
      type: Number,
      required: true
    },
    shared: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Rental', rentalSchema);
