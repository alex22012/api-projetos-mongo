const teamRouter = require("express").Router()
const handleTeam = require("../../handlers/team/handleTeam")
const mongoose = require('mongoose')

teamRouter.get("/teams", async(req, res) => {
    try {
        const resp = await handleTeam.getTeams()
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

teamRouter.post("/team", async(req, res) => {
    try {
        const resp = await handleTeam.postTeam(req.body)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

teamRouter.get("/team/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json("O id informado é inválido")
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await handleTeam.getTeam(id)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

teamRouter.get("/team/:id/users", async(req, res) => {

})

teamRouter.get("/team/:id/projects", async(req, res) => {

})

teamRouter.put("/team/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json("O id informado é inválido")
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await handleTeam.putTeam(id, req.body)
        res.status(200).send("Time atualizado com sucesso")
    } catch (error) {
        res.status(500).json(error)
    }
})

teamRouter.delete("/team/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json("O id informado é inválido")
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await handleTeam.deleteTeam(id)
        res.status(200).send("Time removido com sucesso")
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = teamRouter
