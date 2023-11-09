const bcrypt = require('bcrypt')

function hashPass(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

function comparePass(passwordPlain, passwordHashed) {
    return bcrypt.compareSync(passwordPlain, passwordHashed)
}

module.exports = {
    hashPass,
    comparePass
}