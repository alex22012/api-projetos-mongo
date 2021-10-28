const mongoose = require("mongoose")
const handleTask = require("../../handlers/task/handleTask")
const taskRouter = require("express").Router()

taskRouter.get("/tasks", async(req, res) => {
    try {
        const resp = await handleTask.getTasks()
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

taskRouter.post("/task", async(req, res) => {
    try {
        const resp = await handleTask.postTask(req.body)
        res.status(201).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

taskRouter.get("/task/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json("Id inválido")
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await handleTask.getTask(id)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

taskRouter.put("/task/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json("Id inválido")
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await handleTask.putTask(id, req.body)
        res.status(200).send("Tarefa atualizada com sucesso")
    } catch (error) {
        res.status(500).json(error)
    }
})

taskRouter.delete("/task/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json("Id inválido")
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await handleTask.deleteTask(id)
        res.status(200).send("Tarefa removida com sucesso")
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = taskRouter
