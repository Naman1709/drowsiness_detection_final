const { ApiError } = require("../utils/ApiResponse")
const { ApiResponse } = require("../utils/ApiResponse")
const Log = require("../models/log.model")
const User = require("../models/user.model")
const Twilio = require("twilio")

const client = Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

const createLog = asyncHandler(async (req, res) => {
  const { time, data, type } = req.body

  const user = req.user

  if (!time || !data || !type) {
    throw new ApiError(400, "Invalid Credentials")
  }

  if (!user) {
    return res
      .status(401)
      .json(new ApiResponse(401, {}, "User is not logged in"))
  }

  const logTime = new Date(time)

  const tenMinutesAgo = new Date(logTime.getTime() - 10 * 60 * 1000)
  const tenMinutesLater = new Date(logTime.getTime() + 10 * 60 * 1000)

  await user.populate("logs")

  const recentLogs = user.logs.filter((log) => {
    const logCreatedAt = new Date(log.createdAt)
    return logCreatedAt >= tenMinutesAgo && logCreatedAt < tenMinutesLater
  })

  if (recentLogs.length >= 4) {
    user.logs = user.logs.filter((log) => {
      const logCreatedAt = new Date(log.createdAt)
      return !(logCreatedAt >= tenMinutesAgo && logCreatedAt <= tenMinutesLater)
    })
  }

  const newLog = new Log({
    logType: type,
    message: data,
    createdAt: logTime,
    riskFactor: "high",
  })

  await newLog.save()

  user.logs.push(newLog._id)
  await user.save()

  await client.messages.create({
    body: "WARNING: You have ignored multiple drowsiness alerts. For your safety, please take a break and rest immediately. Continuing to drive while fatigued can lead to serious accidents. Your well-being is important!",
    from: process.env.TWILIO_PHONE_NUMBER,
    to: user.phoneNumber,
  })

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { log: newLog },
        "Log created successfully and SMS sent."
      )
    )
})

module.exports = { createLog }
