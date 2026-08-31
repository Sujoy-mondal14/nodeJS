const express = require('express');
const path = require('path')
const multer = require('multer')

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//file-Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./src/uploads")
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}- ${file.originalname}`)
  }
})

const uploads = multer({storage})

//setup viwe engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))

//ss-Rendering
app.get('/', (req, res) => {
  return res.render('homepage.ejs')
})

app.post('/uploades', uploads.single("profileImage"), (req, res) => {
  console.log(req.body)
  console.log(req.file)

  return res.redirect('/');
})

module.exports = app;