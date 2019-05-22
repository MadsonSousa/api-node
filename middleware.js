function auth (tkn) {
    return (req, res, next) => {
        console.log(`executando autenticação... ${tkn}`)
        next()
    }
}

module.exports = auth