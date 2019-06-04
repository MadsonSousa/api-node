const express = require('express')
const router = express.Router()
const usuarioBO = require('../business/usuarioBO')

router.get('/findAll', (req, res, next) => {
  usuarioBO.findAll()
    .then((usuarios) => {
      res.json(usuarios)
    })
    .catch((error) => {
      res.status(500).send({ error: error.message })
    })
})

module.exports = router
