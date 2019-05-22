const express = require('express')
const app = express()
const middleware = require('./middleware')
const bodyParser = require('body-parser')

app.listen(3000, () => {
    console.log('server is running in port: 3000...')
})

app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(middleware('123'))

app.post('/index', (req, res) => {
    res.send(req.body)
})

app.get('/index', (req, res) => {
    res.send('ola express')
})