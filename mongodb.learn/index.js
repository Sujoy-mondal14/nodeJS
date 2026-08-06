const express = require("express");
const mongo = require('mongoose')

const app = express();
const PORT = 8000;


//MOngoDb Connection
mongo.connect('mongodb://127.0.0.1:27017/MongoDb_Test')
.then(()=> console.log(`MongoDB connected succesfull`))
.catch(err => console.log(`MOngoDb Error ${err}`))

//SCHEMA - MOndgoDB
const userSchema = new mongo.Schema({
    firstName : {
        type: String,
        require: true
    },
    lastName: {
        type : String,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    gender: {
        type: String
    },
    jobTitle: {
        type: String,
        require: true,
    }
}, {
    timestamps: true,
})

//Schema-Model
const User = mongo.model('user', userSchema); 


//MiddleWare
app.use(express.urlencoded({ extended: false }));


//Default
app.get("/", (req, res) => {
  return res.send("this is mongodb.learner");
});


//Web Applictions
app.get('/users',async (req,res) => {
    const allUsers = await User.find({});
    const html = `
    <ul>
        ${allUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `
    return res.send(html);
})

// mobile appliction
app.get('/api/users', async (req,res) => {
    const allUsers = await User.find({});

    return res.json(allUsers);
})
    // single path multiuse
app
  .route("/api/users/:id")
  .get(async (req,res)=> {
    const user = await User.findById(req.params.id);

    if(!user) return res.status(404).json({err: 'user not found'})
    return  res.json(user);   
  })
  .patch(async (req, res) => {
    const body = req.body;
     await User.findByIdAndUpdate(req.params.id , body)
     return res.json({status: 'succes'})
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id)

    return res.json({status: 'user deleted'})
  });

//POST
app.post('/api/users', async (req, res)=>{
    const body = req.body;

    if(!body.firstName || !body.email || !body.jobTitle) return res.status(400).json({err: 'empty fields'});

    const user = await User.create({
        firstName: body.firstName,
        lastName:body.lastName,
        email:body.email,
        gender:body.gender,
        jobTitle: body.jobTitle,
    })
    
    console.log(`result: ${user}`)
    return res.status(201).json({
        status: 'new user registered'
    })
})  

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
