const express = require('express')
const route = require('./routes')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', route)




app.listen(300)