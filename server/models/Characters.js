const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const charactersSchema = new Schema(
  {
    name: String,
    image: String,
    count: Number,
    coords: Array
  },
  {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Characters = mongoose.model('Characters', charactersSchema);
module.exports = Characters;