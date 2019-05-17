const express = require('express')
const router = express.Router()
const Post = require('../models/Post')


router.get('/', (req, res) => {
  res.send("We're on post")
})

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })
  try{
    const savedPost = await post.save()
    res.json(savedPost)
  }catch(err) {
    res.json(err)
  }

})




module.exports = router 

