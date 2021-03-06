const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = {
  title: {
    type: String,
    require: true,
  },
  writer: {
    type: String,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
}

module.exports = mongoose.model('Books', new Schema(schema))
