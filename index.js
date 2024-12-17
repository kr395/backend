//this line is alternative for import express from 'express'
const express = require('express')
// We made express object 
require('dotenv').config()
//Thats how we can do better comment 
//TODO: HELLO
//FIXME: HELLO
//BUG: HELLO
//HACK: HELLO
//NOTE: HELLO
//INFO: HELLO
//IDEA: HELLO
// you can add more in setting.json

const app = express()


app.get('/', (req, res) => {
  res.send('Hey this is Home Page!')
})
//Express is all about request and response 

app.get('/about', (req, res) => {
  res.send('You are on About Page!')
})
app.get('/blog', (req, res) => {
  res.send(" <h1>Blog</h1>")
})



app.listen( process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// Congratulations! You have created your first Express server
