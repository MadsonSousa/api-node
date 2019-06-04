const Firebird = require('node-firebird')
require('dotenv-safe').load()

function findAll () {
  const options = JSON.parse(process.env.DATABASE)
  Firebird.attach(options, function (err, db) {
    if (err) {
      console.log('==================> ', err)
      throw err
    }

    // db = DATABASE
    db.query('SELECT * FROM LOGIN', (err2, result) => {
      console.log(result[0].NOME.toString('binary'))
      db.detach()
    })
  })
}

module.exports = findAll
