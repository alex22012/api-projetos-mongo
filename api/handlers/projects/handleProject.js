const ProjectModel = require('../../database/models/project/ProjectModel')

module.exports = {
    getProjects() {
        return ProjectModel.find({}).exec()
    },
    postProject(project) {
        return ProjectModel.create(project)
    },
    getProject(id) {
        return ProjectModel.findById(id).exec()
    },
    putProject(id, newProject) {
        return ProjectModel.findByIdAndUpdate(id, newProject).exec()
    },
    deleteProject(id) {
        return ProjectModel.findByIdAndDelete(id).exec()
    }
}