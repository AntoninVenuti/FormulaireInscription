let express = require('express')
let router = express.Router()
let clients = require('./client/client')

//Middlewares

router.use('/clients', clients)

module.exports = router;