const express = require('express')
const Controller = require('../controllers/controller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const router = express.Router()


router.get('/', Controller.root)

// register
router.post('/register', Controller.register)

// login
router.post('/login', Controller.login)

// authentication 
router.use(authentication)

// get news
router.get('/news', Controller.news)

// post favourites
router.post('/favorites', Controller.favorite)

// get favorite
router.get('/favorites', Controller.getFavorite)

// get user and user status
router.get('/user', Controller.getUser)

// midtrans endpoint
router.post('/generate-midtrans-token', Controller.generateMidtrans)

// change status
router.patch('/status-user', Controller.changeStatus)



module.exports = router