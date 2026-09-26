const express = require('express')
const fs = require('node:fs')
const zip = require('node:zlib')
const status = require('express-status-monitor')

const app = express()

// fs.createReadStream('./test.txt')
//     .pipe(zip.createGzip())
//     .pipe(fs.createWriteStream('./test2.zip'))

app.use(status())
app.get('/', (req,res)=>{
    const stream = fs.createReadStream('./test.txt')
    // stream.on('data', (chunk)=> res.write(chunk))
    // stream.on('end', () => res.end())
    stream.pipe(res)

    // fs.readFile('./test.txt', (err, data) => {
    //     res.end(data)
    // })
    
})

module.exports = app