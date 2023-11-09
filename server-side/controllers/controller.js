const { comparePass } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')
const {User, statusUser, Favourite} = require('../models/index')
const axios = require('axios')
const midtransClient = require('midtrans-client')

class Controller {

    // root
    static async root(req, res, next) {
        try {
            res.status(200).json('Hello News World -----> RY-Project <-----!')
        } catch (error) {
            next(error)
        }
    }
    // register
    static async register(req, res, next) {
        try {
            const {firstName, lastName, email, password, phoneNumber, address} = req.body
            const newUser = await User.create({firstName, lastName, email, password, phoneNumber, address})
            const newStatus = await statusUser.create({UserId: newUser.id})
            res.status(201).json({id: newUser.id, email: newUser.email, status: newStatus})
        } catch (error) {
            next(error)
        }
    }

    // login
    static async login(req, res, next) {
        try {
            const {email, password} = req.body
            if (!email) {
                throw {name: "email_required"}
            }
            if (!password) {
                throw {name: "password_required"}
            }
            const user = await User.findOne({where: {email}})
            if (!user) {
                throw {name: "invalid_email_password"}
            }
            const passwordValid = comparePass(password, user.password) 
            if (!passwordValid) {
                throw {name: "invalid_email_password"}
            }
            const access_token = generateToken({id: user.id})
            res.status(200).json({access_token})
        } catch (error) {
            next(error)
        }
    }

    // news
    static async news (req, res, next) {
        try {
            const url = process.env.url
            const API_KEY = process.env.API_KEY
            const url1 = url + 'country=us&apiKey=' + API_KEY;

            const {page, filter} = req.query
            console.log(page, '<<<<<<')
            console.log(filter, '<<<<<<')

            const news = await axios({
                url: url1,
                method: 'get',
                params: {
                    page: page,
                    q: filter
                }
            });

            res.status(200).json(news.data)
        } catch (error) {
            next(error)
        }
    }

    // change status user
    static async changeStatus (req, res, next) {
        try {
            const status = 'premium'  
            const status_user = await statusUser.update(
                {status:status, UserId: req.user.id, expiredAt: Date.now()},
                {where : {id: req.user.id}}
                )
            res.status(200).json(`Status user has been updated from free to ${status}`)
        } catch (error) {
            next(error)
        }
    }

    static async generateMidtrans(req, res, next) {
        try {

            const user = await User.findOne({
                where: {id: req.user.id},
                include: statusUser
            })

            if (user.statusUser.status === 'premium') {
                throw {name: 'already_premium'}
            }


            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction : false,
                serverKey : process.env.MIDTRANS_SERVER_KEY
            });

            let parameter = {
                "transaction_details": {
                    "order_id": "TRANSACTION_" + Math.floor(1000 + Math.random() * 2000),
                    "gross_amount": 5000
                },
                "credit_card":{
                    "secure" : true
                },
                "customer_details": {
                    "first_name": user.firstName,
                    "last_name": user.lastName,
                    "email": user.email,
                    "phone": user.phoneNumber
                }
            };

            const midtransToken = await snap.createTransaction(parameter)
            res.status(201).json(midtransToken)
        } catch (error) {
            next(error)
        }
    }

    static async favorite(req, res, next) {
        try {
            console.log(req.body, '<<<<<< favorite 111')
            const {author, title, description, url, urlToImage, publishedAt, content, UserId} = req.body
            console.log(author, title, description, url, urlToImage, publishedAt, content, UserId)
            const newsFavorite = await Favourite.create({author, title, description, url, urlToImage, publishedAt, content, UserId: req.user.id})
            res.status(201).json(newsFavorite)
        } catch (error) {
            next(error)
        }
    }

    static async getFavorite(req, res, next) {
        try {
            const favorite = await Favourite.findAll({where: {UserId: req.user.id}})
            res.status(200).json(favorite)
        } catch (error) {
            next(error)
        }
    }

    static async getUser(req, res, next) {
        try {
            const user = await User.findOne({
                where: {id: req.user.id},
                attributes: { exclude: ['password'] },
                include: statusUser
            })

            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller