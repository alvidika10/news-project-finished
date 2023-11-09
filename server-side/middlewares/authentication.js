const { verifyingToken } = require("../helper/jwt")
const {User, statusUser} = require("../models/index")

async function authentication(req, res, next) {
    try {
        const {access_token} = req.headers
       
        if (!access_token) {
            throw {name: "unauthenticated"}
        }
        const payload = verifyingToken(access_token)
        const findUser = await User.findByPk(payload.id)
        const findstatususer = await statusUser.findOne({where: {UserId:findUser.id}})

        // console.log(findUser, "<<<< USER")
        // console.log(findstatususer, "<<<< USER STATUS")

        if (!findUser) {
            throw {name: "unauthenticated"}
        }
        if (!findstatususer) {
            throw {name: "unauthenticated"}
        }

        req.user = {
            id : findUser.id,
            email: findUser.email,
            status: findstatususer.status
        }

        next()

    } catch (err) {
       next(err)
    }
}

module.exports = authentication