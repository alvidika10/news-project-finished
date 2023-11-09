const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

function generateToken(token) {
    return jwt.sign(token, JWT_SECRET)
}

function verifyingToken(token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    generateToken,
    verifyingToken
}