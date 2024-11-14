const { asyncHandler } = require("../utils/asyncHandler")
const { ApiError } = require("../utils/ApiError")
const { ApiResponse } = require("../utils/ApiResponse")
const User = require("../models/user.model")
const jwt = require("jsonwebtoken")

const verifyJWT = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.accessToken
  if (!token) throw new ApiError(401, "Unauthorized Access")

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

  const user = await User.findById(decodedToken?.id)
  if (!user) throw new ApiError(401, "Unauthorized Access")

  req.user = user
  next()
})

module.exports = { verifyJWT }
