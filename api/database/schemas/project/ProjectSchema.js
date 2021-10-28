const {Schema} = require("mongoose")

const ProjectSchema = new Schema({ 
    projectName: {
        type:String,
        required:true
    },
    startDate: {
        type:Date,
        required:true
    },
    endDate: {
        type:Date,
        required:true
    },
    teamId: {
        type:Schema.Types.ObjectId,
        ref:"Team",
        required:true
    },
    isFinished:{
        type:Boolean,
        required:true
    }
})

module.exports = ProjectSchema