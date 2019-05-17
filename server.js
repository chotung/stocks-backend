const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')


let port = process.env.PORT || 6969
app.use(bodyParser.json())

// MIDDLEWARE/ FUNCTION THAT EXCUTES WHEN ROUTES ARE BEING HIT
// app.use('/posts', (req, res) => {
//   console.log('This is middleware')
//   console.log('Auth')
// })

const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/users')

app.use('/posts', postRoutes)
app.use('/user', userRoutes)
// ROUTES

app.get('/', (req, res) => {
  res.send("We're on Home")
})





// Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('Connected to Database'))

app.listen(port, () => console.log(`Server is listening on port ${port}`))