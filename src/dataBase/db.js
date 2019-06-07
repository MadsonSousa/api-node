const Firebird = require('node-firebird')
require('dotenv-safe').load()
const query = require('../querys/index')

const options = JSON.parse(process.env.DATABASE)

function findTable (tableName) {
  return new Promise((resolve, reject) => {
    Firebird.attach(options, function (err, db) {
      if (err) {
        reject(err)
      }
      query('qryTables.sql').then((resultQuery) => {
        db.query(resultQuery, (err2, result) => {
          if (err2) {
            reject(err2)
          }
          db.detach()
          if (result && result.length) {
            const retorno = result.find((tab) => {
              return tab.TABELA === tableName
            })
            resolve(retorno)
          }
        })
      })
    })
  })
}

function findAll () {
  // Firebird.attach(options, function (err, db) {
  //   if (err) {
  //     console.log('==================> ', err)
  //     throw err
  //   }

  //   db.on('row', function (row, index, isObject) {
  //     console.log('row: ', row, index, isObject)
  //   })

  // db.on('result', function (result) {
  //   console.log('result: ', result)
  // })

  // db.on('attach', function () {
  //   console.log('attach: ')
  // })

  // db.on('detach', function (isPoolConnection) {
  //   console.log('detach: ', isPoolConnection)
  // })

  // db.on('reconnect', function () {
  //   console.log('reconnect: ')
  // })

  // db.on('error', function (err) {
  //   console.log('error: ', err)
  // })

  // db.on('transaction', function (isolation) {
  //   console.log('transaction: ', isolation)
  // })

  // db.on('commit', function () {
  //   console.log('commit: ')
  // })

  // db.on('rollback', function () {
  //   console.log('rollback: ')
  // })

  // db = DATABASE
  // db.query('SELECT * FROM LOGIN', (err2, result) => {
  //   console.log(result[0].NOME)
  //   db.detach()
  // })
  findTable('CIDADE').then((retorno) => {
    console.log('encontrou ?', retorno)
  }).catch((error) => console.log(error))
  // })
}

module.exports = findAll
