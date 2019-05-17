const express = require('express')
const router = express.Router();
const clients = require('./controllers/clientController')


router.get('/', clients.getClients)

router.get('/:id', clients.getClient)

router.post('/', clients.postClient);


module.exports = router;