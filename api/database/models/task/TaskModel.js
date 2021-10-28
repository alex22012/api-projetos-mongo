const mongoose = require("../../MongooseConnection")
const TaskSchema = require("../../schemas/task/TaskSchema")

const TaskModel = mongoose.model("Task", TaskSchema)

module.exports = TaskModel