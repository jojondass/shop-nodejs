const express = require('express')
const mongoose = require('mongoose')
const articleRoute = require('./routes/articleRoute')

const app = express()

mongoose.connect('mongodb://localhost:27017/shop')
const db = mongoose.connection
db.on('error' , (error) => 
  console.log(error)
)

db.once('open' , () => 
console.log("Connexion a mongoDB reuissie!")
)

app.use(express.json())

app.use('/articles', articleRoute)

app.listen(3001, () => {
  console.log("le server ecoute sur le port : 3001");
})

