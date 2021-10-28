const mongoose = require("../../MongooseConnection")
const TeamSchema = require("../../schemas/team/TeamSchema")

const TeamModel = mongoose.model("Team", TeamSchema)

module.exports = TeamModel