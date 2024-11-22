const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorHandler.middleware");
const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public")));

const userRouter = require("./routes/user.route");
const logRouter = require("./routes/log.route");
app.use("/api/v1/user", userRouter);
app.use("/api/v1/log", logRouter);

app.use(errorHandler);

module.exports = app;
