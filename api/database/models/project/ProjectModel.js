const mongoose = require("../../MongooseConnection")
const ProjectSchema = require('../../schemas/project/ProjectSchema')

const ProjectModel = mongoose.model("Project", ProjectSchema)

module.exports = ProjectModel