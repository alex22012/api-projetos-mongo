const {Schema} = require("mongoose")

TeamSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    numberOfMembers: {
        type:Number
    },
    creationDate: {
        type:Date,
        default: new Date(),
    },
    finishedProjects: {
        type:Number
    }
})

module.exports = TeamSchema