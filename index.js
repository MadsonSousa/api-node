const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./src/routes/index')
const db = require('./src/dataBase/db')

app.listen(3000, () => {
  console.log('server is running in port: 3000...')
  db()
})

app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(routes)
