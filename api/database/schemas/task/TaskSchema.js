const {Schema} = require("mongoose")

const TaskSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    complexity: {
        type:Number,
        required:true
    },
    importance: {
        type:Number,
        required:true
    },
    projectId: {
        type:Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    userId: {
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    startDate: {
        type:Date,
        required:true
    },
    endDate: {
        type:Date,
        required:true
    },
    isFinished:{
        type:Boolean,
        required:true
    }
})