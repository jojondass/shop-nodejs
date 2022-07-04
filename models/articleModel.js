const mongoose = require('mongoose')

const articlSchema = new mongoose.Schema({
  titre:{
    type: String,
    require: true,
    max: 250
  },
  description:{
    type: String,
    require: true
  },
  prix:{
    type: Number,
    require: true,
  },
  disponibilite:{
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('articles', articlSchema)