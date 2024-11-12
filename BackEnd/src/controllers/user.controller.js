const { asyncHandler } = require("../utils/asyncHandler")
const { ApiError } = require("../utils/ApiError")
const { ApiResponse } = require("../utils/ApiResponse")
const User = require("../models/user.model")

const options = {
  httpOnly: true,
  secure: true,
}

const userRegister = asyncHandler(async (req, res) => {
  const { username, email, password, confirmPassword } = req.body

  if (
    !username?.trim() ||
    !email?.trim() ||
    !password?.trim() ||
    !confirmPassword?.trim()
  ) {
    throw new ApiError(400, "Enter Valid Credentials")
  }

  const existingUsername = await User.findOne({ username })
  if (existingUsername) {
    throw new ApiError(409, "Username already exists")
  }

  const existingEmail = await User.findOne({ email })
  if (existingEmail) {
    throw new ApiError(409, "Email already exists")
  }

  const user = await User.create({ username, email, password, confirmPassword })
  if (!user) {
    throw new ApiError(500, "Error Occurred While Creating User")
  }

  res.status(201).json(new ApiResponse(201, {}, "User Registered Successfully"))
})

const userLogin = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if (!username?.trim() || !email?.trim() || !password?.trim()) {
    throw new ApiError(
      400,
      "Enter Valid Credentials"
    )
  }

  const user = await User.findOne({ email })

  if (!user) {
    throw new ApiError(404, "User Not Found")
  }

  if (user.username !== username) {
    throw new ApiError(
      401,
      "Invalid Credentials: The email does not match the username."
    )
  }

  if (!(await user.isPasswordCorrect(password))) {
    throw new ApiError(401, "Invalid Password")
  }

  const token = await user.generateAccessTokens()

  if (!token) {
    throw new ApiError(500, "Error Occurred While Generating Token")
  }

  res
    .status(200)
    .cookie("accessToken", token, options)
    .json(new ApiResponse(200, {}, "User LoggedIn Successfully"))
})

const userLogout = asyncHandler(async (req, res) => {
  res
    .status(200)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User LoggedOut Successfully"))
})

const checkAuth = asyncHandler(async (req, res) => {
  const user = req.user
  if (!user) throw new ApiError(401, "Unauthorized Access")

  res.status(200).json(new ApiResponse(200, {}, "User is Authorized"))
})

module.exports = {
  userRegister,
  userLogin,
  userLogout,
  checkAuth,
}
