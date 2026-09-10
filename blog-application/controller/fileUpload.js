const multer = require("multer");
const path = require('node:path')
const fs = require('node:fs')

const storage = multer.diskStorage({
    destination: async function(req,file,cb){
        try {
            const userId = req.user && req.user._id ? String(req.user._id) : "guest"
            const uploadPath = path.join(__dirname, "..", "public", "images", "uploads", userId)
            await fs.promises.mkdir(uploadPath, {recursive:true})
            cb(null, uploadPath)
        } catch (error) {
            cb(error)
        }
    },
    filename: function(req,file,cb){
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null, fileName)
    }
})

const upload = multer({storage: storage})

module.exports = upload