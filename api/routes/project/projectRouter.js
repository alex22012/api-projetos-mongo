const projectRouter = require("express").Router()
const mongoose = require("mongoose")
const handleProject = require("../../handlers/projects/handleProject")

projectRouter.get("/projects", async(req, res) => {
    try {
        const resp = await handleProject.getProjects()
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

projectRouter.post("/project", async(req, res) => {
    try {
        const resp = await handleProject.postProject(req.body)
        res.status(201).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

projectRouter.get("/project/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json('Id inválido')
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await handleProject.getProject(id)
    } catch (error) {
        res.status(500).json(error)
    }
})

projectRouter.get("/projects/:id/tasks", async(req, res) => {

})

projectRouter.put("/project/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json('Id inválido')
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await handleProject.putProject(id, req.body)
    } catch (error) {
        res.status(500).json(error)
    }
})

projectRouter.delete("/project/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json('Id inválido')
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await handleProject.deleteProject(id)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = projectRouter
