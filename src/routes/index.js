const express = require('express')
const router = express.Router()
const usuarios = require('./usuarios')
const login = require('./login')
const auth = require('../middleware/authenticate')

router.get('/', function (req, res, next) {
  res.status(200).send({
    title: 'Node Express API',
    version: '0.0.1'
  })
})

router.use(auth)
router.use(login)
router.use('/usuarios', usuarios)

module.exports = router
