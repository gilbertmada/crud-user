
const express = require('express')
const userRoute = require('./user')

 const route = express.Router()
 route.use('/',userRoute )
      //.use('/', contactRoute)
 module.exports = route