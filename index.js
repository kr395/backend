//this line is alternative for import express from 'express'
const express = require('express')
// We made express object 
require('dotenv').config()
const port = process.env.PORT
console.log(port);

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
const githubUserData = {
  "login": "kr395",
  "id": 75511425,
  "node_id": "MDQ6VXNlcjc1NTExNDI1",
  "avatar_url": "https://avatars.githubusercontent.com/u/75511425?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kr395",
  "html_url": "https://github.com/kr395",
  "followers_url": "https://api.github.com/users/kr395/followers",
  "following_url": "https://api.github.com/users/kr395/following{/other_user}",
  "gists_url": "https://api.github.com/users/kr395/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kr395/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kr395/subscriptions",
  "organizations_url": "https://api.github.com/users/kr395/orgs",
  "repos_url": "https://api.github.com/users/kr395/repos",
  "events_url": "https://api.github.com/users/kr395/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kr395/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Gopal Kumar Das",
  "company": null,
  "blog": "@krgopal395",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Keep Learning Keep Practicing Be Happy",
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2020-12-05T02:11:37Z",
  "updated_at": "2024-12-17T12:14:47Z"
}


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

app.get('/github', (req, res) => {
  res.json(githubUserData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Congratulations! You have created your first Express server
