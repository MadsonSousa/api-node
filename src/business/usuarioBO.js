const usuariosBD = [
  {
    id_usuario: 1,
    nome: 'Joao da Silva',
    email: 'joao@teste.com',
    senha: '123'
  },
  {
    id_usuario: 2,
    nome: 'Maria da Silva',
    email: 'maria@teste.com',
    senha: '123'
  },
  {
    id_usuario: 3,
    nome: 'Marcos Pereira',
    email: 'marcos@teste.com',
    senha: '123'
  }
]

function findAll () {
  return new Promise((resolve, reject) => {
    try {
      resolve(usuariosBD)
    } catch (error) {
      reject(error)
    }
  })
}

function findByEmail (usuario) {
  return new Promise((resolve, reject) => {
    findAll()
      .then((usuarios) => {
        const user = usuarios.find(u => u.email === usuario.email)

        if (!user) {
          reject(new Error('UserNotFound'))
        }
        resolve(user)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

module.exports = {
  findAll,
  findByEmail
}
