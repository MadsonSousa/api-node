const express = require('express')
const router = express.Router()

router.get('/findByName', (req, res, next) => {
  res.json({name: 'teste'})
})

module.exports = router