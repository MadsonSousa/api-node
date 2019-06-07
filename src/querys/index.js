const fs = require('fs')
const mustache = require('mustache')

function loadQuery (queryName) {
  return new Promise((resolve, reject) => {
    const query = fs.readFileSync(`${__dirname}\\${queryName}`) || ''
    resolve(mustache.render(query.toString('utf8')))
  })
}

module.exports = loadQuery
