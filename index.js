/*
  Module dependnecies
*/
const express = require('express')
const scragram = require('scragram')

/*
  Constants
*/
const app = express()
const hashTag = 'streaming'

// /hastag/?type=top
app.get('/hashtag/', function (req, res) {
  scragram.getLinksTopPost(hashTag, (err, data) => {
    err ? res.json({ 'err': err }):res.json({ 'data': data })
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
