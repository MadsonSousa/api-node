const usuarios = [
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
  return usuarios
}

function findByEmail (usuario) {
  const usuarios = findAll()
  const user = usuarios.find( u => u.email === usuario.email )

  if (!user) {
    throw new Error('UserNotFound')
  }
  return user
}


module.exports = {
  findAll,
  findByEmail
}