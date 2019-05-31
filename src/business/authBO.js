require("dotenv-safe").load()
const jwt = require('jsonwebtoken')
const usuarioBO = require('./usuarioBO')

function authenticate (usuarioLogin) {
  const usuario = usuarioBO.findByEmail(usuarioLogin)

  if ((!usuario) || usuarioLogin.senha !== usuario.senha) {
    throw new Error('invalidUserOrPassword')
  }
  const token = jwt.sign({ id: usuario.id_usuario }, process.env.SECRET, {
    expiresIn: 1800
  })

  return { token }
}

module.exports = {
  authenticate
}