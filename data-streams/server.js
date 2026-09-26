const app = require('./app.js')

const PORT = 8001

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})