const express = require('express')
const router = express.Router()
const authBO = require('../business/authBO')

router.post('/login', (req, res, next) => {
 try {
  const authenticate = authBO.authenticate(req.body)
  res.json(authenticate)
 } catch (error) {
   res.status(500).send({ error: error.message })
 }
})

router.get('/logout', (req, res, next) => {
  res.status(200).send({ auth: false, token: null })
})

module.exports = router