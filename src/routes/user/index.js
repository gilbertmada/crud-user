const express = require('express')
 const route = express.Router()
 

 let users =[]
 
route.post('/create-user',(req, res)=>{
users.push(req.body);
 console.log(users);
 res.send('create')
 })
 
 route.put('/update-user',(req, res)=>{
 users[0].firstName='randria'
 console.log(users);
 res.send('update')
 })
 
 
 route.delete('/delete-user',(req, res)=>{
 users=[]
 console.log(users);
 res.send('delete')
 
 })

 

 module.exports = route