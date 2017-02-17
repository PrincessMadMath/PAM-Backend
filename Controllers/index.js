const express = require('express')
const router = express.Router()

// Differents controllers
const api = require('./api')

router.use('/api', api)


router.get('/', function(req, res){
    res.send('PAM-API')
})

module.exports = router

