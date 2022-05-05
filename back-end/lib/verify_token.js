const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    // Lê o token passado no cabeçalho da requisição
    const token = req.headers['x-access-token']

    //  Se o token não existir, retorna 403: Forbindden
    if(! token) res.status(403).send({auth: false, message: 'No token provided'})

    // Vereficar se o token é válido e está no prazo de validade
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        // Token inválido/expirado
        if(err) return req.status(403).send({auth: false, message: 'Failed to authenticate token'})

        // O token está OK!

        // Salva o id na request para uso posterior
        req.userId = decoded.id

        next() // Chama a próxima função de middleware
    })
}