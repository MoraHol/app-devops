const jwt = require('jsonwebtoken')

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    let token = req.header('Authorization')
    token = token.replace('JWT ','');
    console.log(token)
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        req.user =jwt.verify(token, process.env.TOKEN_SECRET)
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

module.exports = verifyToken;