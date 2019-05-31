const express = require('express')
const router = express.Router()
const usuarios = require('./usuarios')
const login = require('./login')
const jwt = require('jsonwebtoken')
require("dotenv-safe").load()


router.get('/', function (req, res, next) {
  res.status(200).send({
    title: "Node Express API",
    version: "0.0.1"
  })
})

router.use('/usuarios', verifyJWT, usuarios)
router.use(login)


function verifyJWT (req, res, next) {
  const authorization = req.headers['authorization']

  if (!authorization) {
    res.sendStatus(403)
  }
  
  const bearer = authorization.split(' ')
  const token = bearer[1]

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' })
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id
    next()
  })
}

module.exports = router