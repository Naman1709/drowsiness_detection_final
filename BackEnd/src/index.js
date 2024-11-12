require("dotenv").config()
const connectDB = require("./db/index")
const app = require("./app")

connectDB()
  .then(() => {
    app.on("error", () => {
      console.log(`Some Unknown Error Occurred While Starting the Server`)
      process.exit(1)
    })
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server Listening on PORT ${process.env.PORT || 3000}`)
    })
  })
  .catch((err) => {
    console.log("Some Error Occurred While Connecting to the Database : ", err)
    process.exit(1)
  })
