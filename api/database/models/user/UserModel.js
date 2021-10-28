const mongoose = require("../../MongooseConnection")
const UserSchema = require("../../schemas/user/UserSchema")

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel