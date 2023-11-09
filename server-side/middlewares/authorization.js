const {statusUser} = require('../models/index')

async function authorization(req, res, next) {

    try {
        const {id} = req.params

        const statususer = await statusUser.findByPk(id)

        if (!statususer) {
            throw {name: "not found", id}
        }
           
        if (req.user.id === statususer.UserId) {
            console.log("admin")
            next()
        }
        else {
            console.log("staff")
            throw {name: "forbidden"}         
        }

    } catch (err) {
        next(err)
    }
}

module.exports = authorization