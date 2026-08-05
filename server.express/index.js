const express = require('express')

const app = express();

app.get('/', (req,res) =>{
    return res.send('This is Home Page')
})

app.get('/about', (req,res) => {
    return res.send('This is about page')
})

app.listen(8000, ()=> console.log('ServerStarted'));