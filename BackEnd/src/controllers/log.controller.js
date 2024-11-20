const { ApiError } = require("../utils/ApiError")
const { ApiResponse } = require("../utils/ApiResponse")
const Log = require("../models/log.model")
const User = require("../models/user.model")
const {asyncHandler} = require("../utils/asyncHandler")
const Twilio = require("twilio")

const client = Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

const showLogs = asyncHandler(async(req , res) =>{
  const user = req.user;

  if(!user) throw new ApiError(401 , "Unauthorized Access");

  const allLogs = user.logs;

  console.log(allLogs);

  res.status(200).json(new ApiResponse(200 , {logs : allLogs} , "Logs Retrieved Successfully"));
})

const createLog = asyncHandler(async (req, res) => {
  const { time, date, type } = req.body;

  const user = req.user;

  if (!time || !date || !type) {
    throw new ApiError(400, "Invalid Credentials");
  }

  const logTime = new Date(time); 

  
  if (isNaN(logTime.getTime())) {
    throw new ApiError(400, "Invalid time format");
  }

  const tenMinutesAgo = new Date(logTime.getTime() - 10 * 60 * 1000);

  await user.populate("logs");

  const recentLogs = user.logs.filter((log) => {
    const logCreatedAt = new Date(log.time);
    return logCreatedAt >= tenMinutesAgo && logCreatedAt < logTime;
  });

  let riskFactor = "low";
  if (recentLogs.length >= 4) {
    await client.messages.create({
      body: "WARNING: You have ignored multiple drowsiness alerts. Please take a break.",
      from: process.env.TWILIO_PHONE_NUMBER, // Ensure this is a valid Twilio number
      to: "+919289847629" // Ensure this is a correctly formatted number
    });    
    riskFactor = "high";

  }
    const newLog = new Log({
      type: type,
      time: time,
      date: date,
      riskFactor,
    });

  await newLog.save();
  user.logs.push(newLog._id);
  await user?.save();

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { log: newLog },
        "Log created successfully and SMS sent."
      )
    );
});


module.exports = { createLog  , showLogs}
