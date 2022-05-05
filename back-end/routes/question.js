const express = require('express')
const router = express.Router()
const verifyToken = require('../lib/verify_token')

// importa o controller correspondente
const controller = require('../controllers/question')


router.post('/', verifyToken, controller.create)
router.get('/', verifyToken, controller.retrieve)
router.get('/:id', verifyToken, controller.retrieveOne)
router.put('/', verifyToken, controller.update)
router.delete('/', verifyToken, controller.delete)

module.exports = router