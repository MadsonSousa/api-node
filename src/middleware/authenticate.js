const jwt = require('jsonwebtoken')
require('dotenv-safe').load()

function verifyAutheticate (req, res, next) {
  const verify = verifyUrlNotAuthenticate(req.originalUrl)
  if (verify) {
    return next()
  }
  const authorization = req.headers['authorization']

  if (!authorization) {
    return res.sendStatus(403)
  }

  const bearer = authorization.split(' ') || []
  const token = bearer[1]

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' })

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id
    next()
  })
}

function verifyUrlNotAuthenticate (url) {
  const urlNotAuthenticate = JSON.parse(process.env.URLNOTAUTHENTICATE)
  return urlNotAuthenticate.find((el) => el === url)
}

module.exports = verifyAutheticate
