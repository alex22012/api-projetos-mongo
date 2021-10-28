const UserModel = require('../../database/models/user/UserModel')

module.exports = {
    getUsers() {
        return UserModel.find({}).exec()
    },
    postUser(user) {
        return UserModel.create(user)
    },
    getUser(id){
        return UserModel.findById(id).exec()
    },
    putUser(id, newUser){
        return UserModel.findByIdAndUpdate(id, newUser).exec()
    },
    deleteUser(id) {
        return UserModel.findByIdAndDelete(id).exec()
    }
}