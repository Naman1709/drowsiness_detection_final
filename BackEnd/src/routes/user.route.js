const express = require("express");
const {
  userRegister,
  userLogin,
  userLogout,
  checkAuth,
} = require("../controllers/user.controller.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");

const userRouter = express.Router();
userRouter.route("/login").post(userLogin);
userRouter.route("/register").post(userRegister);

userRouter.route("/logout").post(verifyJWT, userLogout);
userRouter.route("/checkAuth").get(verifyJWT, checkAuth);
module.exports = userRouter;
