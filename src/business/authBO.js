require('dotenv-safe').load()
const jwt = require('jsonwebtoken')
const usuarioBO = require('./usuarioBO')

function authenticate (usuarioLogin) {
  return new Promise((resolve, reject) => {
    try {
      usuarioBO.findByEmail(usuarioLogin)
        .then((usuario) => {
          if ((!usuario) || usuarioLogin.senha !== usuario.senha) {
            throw new Error('invalidUserOrPassword')
          }
          const token = jwt.sign({ id: usuario.id_usuario }, process.env.SECRET, {
            expiresIn: 1800
          })

          resolve({ token })
        })
        .catch((error) => {
          reject(error)
        })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  authenticate
}
