const express = require("express")
const {
  createLog,
  showLogs,
  sendAlert,
} = require("../controllers/log.controller.js")
const { verifyJWT } = require("../middlewares/auth.middleware.js")

const logRouter = express.Router()

logRouter.route("/createLog").post(verifyJWT, createLog)
logRouter.route("/showLog").get(verifyJWT, showLogs)
logRouter.route("/smsAlert").post(verifyJWT, sendAlert)

module.exports = logRouter
