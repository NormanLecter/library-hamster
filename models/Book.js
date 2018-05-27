var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  publication_type : String,
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  link : String,
  short_desc :  Text,
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
