const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./src/routes/index')

app.listen(3000, () => {
    console.log('server is running in port: 3000...')
})

app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(routes)