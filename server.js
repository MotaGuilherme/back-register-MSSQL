require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./src/routes/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.API_PORT, function(){
    console.log(`Server started on port ${process.env.API_PORT}`)
});

