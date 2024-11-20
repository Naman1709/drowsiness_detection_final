const mongoose = require("mongoose")

const riskFactorEnum = ["high", "low"]


const logSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  riskFactor: {
    type: String,
    enum: riskFactorEnum, 
    required: true,
  },
})

const Log = mongoose.model("Log", logSchema)

module.exports = Log
