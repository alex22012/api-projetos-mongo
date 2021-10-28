const TeamModel = require("../../database/models/team/TeamModel")

module.exports = {
    getTeams() {
        return TeamModel.find({}).exec()
    },
    postTeam(team) {
        return TeamModel.create(team)
    },
    getTeam(id) {
        return TeamModel.findById(id).exec()
    },
    putTeam(id, newTeam){
        return TeamModel.findOneAndUpdate({_id:id}, newTeam)
    },
    deleteTeam(id){
        return TeamModel.findOneAndDelete({_id:id})
    }
}