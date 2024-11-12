const mongoose = require("mongoose")
const { DB_NAME } = require("../constants")

const connectDB = async () => {
  const connectionInstance = await mongoose.connect(
    `${process.env.MONGODB_URI}/${DB_NAME}`
  )
  console.log(`Database Connected || DB HOST : ${connectionInstance.connection.host}`)
}

module.exports = connectDB
