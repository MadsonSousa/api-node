const express = require('express')
const router = express.Router()
const usuarios = require('./usuarios')
const auth = require('../util/auth')
const jwt = require('jsonwebtoken')
require("dotenv-safe").load()


router.get('/', function (req, res, next) {
  res.status(200).send({
    title: "Node Express API",
    version: "0.0.1"
  })
})

router.use('/usuarios', verifyJWT, usuarios)
router.use(auth)


function verifyJWT (req, res, next) {
  var token = req.headers['x-access-token']
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' })
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id
    next()
  })
}

module.exports = router