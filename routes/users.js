const express = require('express')
const router = express.Router()
const User = require('../models/User')


router.get('/', (req, res) => {
  res.send("This is a person")
})

router.post('/signup', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email
  })
  try {
    const newUser = await user.save()
    res.json(newUser)
  } catch (error) {
    res.json(err)
  }
})



module.exports = router