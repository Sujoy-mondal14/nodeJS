const { createHmac, randomBytes } = require('node:crypto')
const mongo = require('mongoose')
const { error } = require('node:console')

const userSchema = new mongo.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
    },
    profileImage: {
        type: String,
        default: '/images/default_profile_img.png'
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
}, {
    timestamps: true,
})

userSchema.pre('save', async function() {
    const user = await this

    if(!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac('sha256', salt)
        .update(user.password)
        .digest('hex')
    
    this.salt =  salt; 
    this.password =  hashedPassword  
})

userSchema.static('matchPassword', async function (email, password){
    const user = await this.findOne({email})
    if(!user) return new Error('User not found !')

    const salt = user.salt
    const hashedPassword = user.password

    const userProvidedHash = createHmac('sha256', salt)
        .update(password)
        .digest('hex')

    if(hashedPassword != userProvidedHash) return new Error("Incorrect passWord")
        
    return {...user, password: undefined, salt: undefined} 
})

const USER = mongo.model('user', userSchema)

module.exports = USER