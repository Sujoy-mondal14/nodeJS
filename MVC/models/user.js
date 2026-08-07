const mongo = require('mongoose');

//User Schema
const userSchema = new mongo.Schema({
    firstName:{
        type:String,
        require: true
    },
    lastName:{
        type: String
    },
    email:{
        type:String,
        require: true, 
        unique: true,
    },
    gender:{
        type: String,
        require: true,
    },
    jobTitle:{
        type: String,
        require: true
    }
},{
    timestamps: true
})

//Schema-Model
const User = mongo.model('user', userSchema);

//exports
module.exports = User;