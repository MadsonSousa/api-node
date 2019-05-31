require("dotenv-safe").load()
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const usuarioBO = require('../business/usuarioBO')

router.post('/login', (req, res) => {
  try {
    const usuarioLogin = req.body
    const usuario = usuarioBO.findByEmail(usuarioLogin)

    if ((!usuario) || usuarioLogin.senha !== usuario.senha) {
      throw new Error('invalidUserOrPassword')
    }
    var token = jwt.sign({ id: usuario.id_usuario }, process.env.SECRET, {
      expiresIn: 1800
    })
    return res.status(200).send({ auth: true, token: token })
  } catch (error) {
    res.status(400).send({ error: error.message })    
  }
})

router.get('/logout', (req, res, next) => {
    res.status(200).send({ auth: false, token: null })
})

module.exports = router