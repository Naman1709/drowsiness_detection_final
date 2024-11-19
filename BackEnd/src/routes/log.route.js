const express = require("express")
const { createLog } = require("../controllers/log.controller.js")
const { verifyJWT } = require("../middlewares/auth.middleware.js")

const logRouter = express.Router()

logRouter.route("/checkLog").get(verifyJWT, createLog)

module.exports = logRouter
