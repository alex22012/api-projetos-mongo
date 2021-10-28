const {Schema} = require("mongoose")

const UserSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    idTeam: {
        type: Schema.Types.ObjectId,
        ref:"Team",
        required:true
    },
    completedTasks: {
        type:Number,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true
    }
})

module.exports = UserSchema