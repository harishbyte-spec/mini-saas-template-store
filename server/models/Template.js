const mongoose = require('mongoose');
const TemplateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  thumbnail_url: String,
  category: String
}, { timestamps: true });
module.exports = mongoose.model('Template', TemplateSchema);
