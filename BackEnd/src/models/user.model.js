const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is Required"],
      unique: [true, "Username Should be Unique"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: [true, "Email Should be Unique"],
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      trim: true,
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm Password is Required"],
      trim: true,
    },
  },
  { timestamps: true }
)

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()

  if (this.password !== this.confirmPassword) {
    return next(new Error("Passwords do not match"))
  }

  this.password = await bcrypt.hash(this.password, 10)
  this.confirmPassword = undefined
  next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessTokens = async function () {
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  )
}

const User = mongoose.model("User", userSchema)

module.exports = User
