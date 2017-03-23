'use strict'
/*
  Module dependnecies
*/
const express = require('express')
const scragram = require('scragram')
const bodyParser = require('body-parser')


/*
  Constants
*/
const app = express()
const router = express.Router()
const port = process.env.PORT || 8080

router.use(function(req, res, next){
  next()
})

router.get('/', function(req, res) {
	res.json({ message: 'Gramscrap!' })
})

router.route('/hashtag/:tag')
  // create a hashtag (accessed at GET http://localhost:8080/api/hashtag/:tag)
  .get(function(req, res){
    let hashTag = req.params.tag
    scragram.getLinksTopPost(hashTag, (err, data) => {
      err ? res.json({ 'err': err }):res.json({ 'data': data })
    })
  })

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router)

// START THE SERVER
// =============================================================================
app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
})
