const { ApiError } = require("../utils/ApiError")
const { ApiResponse } = require("../utils/ApiResponse")
const Log = require("../models/log.model")
const User = require("../models/user.model")
const { asyncHandler } = require("../utils/asyncHandler")
const Twilio = require("twilio")

const client = Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

const sendAlert = asyncHandler(async (req, res) => {
  const user = req.user
  if (!user) throw new ApiError(401, "Unauthorized Access")

  console.log("smsalert ", user);
  

  await client.messages.create({
    body: `This is an automated message to inform you that ${user.username} has been detected as sleeping while driving. Immediate action is advised to ensure their safety. Please reach out to ${user.username} immediately to confirm their well-being or assist if necessary. Stay safe!`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "+919289847629",
  })

  res.status(200).json(new ApiResponse(200, {}, "SMS Alert Sent Successfully"))
})
const showLogs = asyncHandler(async (req, res) => {
  const user = req.user

  if (!user) throw new ApiError(401, "Unauthorized Access")
  await user.populate("logs")

  const allLogs = user.logs

  res
    .status(200)
    .json(
      new ApiResponse(200, { logs: allLogs }, "Logs Retrieved Successfully")
    )
})

const createLog = asyncHandler(async (req, res) => {
  const { time, date, type } = req.body

  const user = req.user

  if (!time || !date || !type) {
    throw new ApiError(400, "Invalid Credentials")
  }

  const logTime = new Date(time)

  if (isNaN(logTime.getTime())) {
    throw new ApiError(400, "Invalid time format")
  }

  const tenMinutesAgo = new Date(logTime.getTime() - 10 * 60 * 1000)

  await user.populate("logs")

  const recentLogs = user.logs.filter((log) => {
    const logCreatedAt = new Date(log.time)
    return logCreatedAt >= tenMinutesAgo && logCreatedAt < logTime
  })

  let riskFactor = "low"
  if (recentLogs.length && recentLogs.length % 9 == 0) {
    await client.messages.create({
      body: `This is an automated message to inform you that ${req.username} has been ignored multiple alerts as sleeping while driving. Immediate action is advised to ensure their safety. Please reach out to ${req.username} immediately to confirm their well-being or assist if necessary. Stay safe!`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: "+919289847629",
    })
    riskFactor = "high"
  }
  const newLog = new Log({
    type: type,
    time: time,
    date: date,
    riskFactor,
  })

  await newLog.save()
  user.logs.push(newLog._id)
  await user?.save()

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { log: newLog },
        "Log created successfully"
      )
    )
})

module.exports = { createLog, showLogs, sendAlert }
