const express = require('express')
const router = express.Router()
const usuarioBO = require('../business/usuarioBO')

router.get('/findAll', (req, res, next) => {
  const usuarios = usuarioBO.findAll()
  res.json(usuarios)
})

module.exports = router