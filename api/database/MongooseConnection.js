const mongoose = require("mongoose")

async function connect() {
    mongoose.set("runValidators", true)
    mongoose.Promise = global.Promise
    await mongoose.connect("mongodb+srv://alex:Aganinha220@cluster0.5ovhs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

connect()

module.exports = mongoose