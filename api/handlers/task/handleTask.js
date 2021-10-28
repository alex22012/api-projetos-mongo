const TaskModel = require("../../database/models/task/TaskModel")

module.exports = {
    getTasks() {
        return TaskModel.find({}).exec()
    },
    postTask(task) {
        return TaskModel.create(task)
    },
    getTask(id) {
        return TaskModel.findById(id).exec()
    },
    putTask(id, newTask) {
        return TaskModel.findByIdAndUpdate(id, newTask).exec()
    },
    deleteTask(id) {
        return TaskModel.findByIdAndRemove(id).exec()
    }
}