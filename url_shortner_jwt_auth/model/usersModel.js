const mongo = require('mongoose')

const userSchema = new mongo.Schema({
    name: {
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        uinque: true
    },
    password: {
        type:String,
        required: true,
    }
}, {timestamps: true})

const USER = mongo.model('users', userSchema);

module.exports = USER