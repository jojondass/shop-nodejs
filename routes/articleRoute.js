const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const Article = require('../models/articleModel')

// route pour enregistrer un nouvel aerticle
router.post('/newArticle', async (request, response) => {
  const article = new Article({
    titre: request.body.titre,
    description: request.body.description,
    prix: request.body.prix,
  })
  try{
    const newArticle = await article.save()
    response.status('200').json(newArticle)
  }catch(error){
    console.log(error);
  }
})

// route pour lister les articles
router.get('/', async (request, response) => {
  try{
    const articles = await Article.find()
    response.json(articles)
  }catch(error){
    console.log(error);
  }
})

// route pour retrouver un article via son id
router.get('/:id', async (request, response) => {
  try{
    const articles = await Article.findById(request.params.id)
    response.json(articles)
  }catch(error){
    console.log(error)
  }
})

// route pour modifier un article
router.patch('/:id', async (request, response) => {
  try{
    const articles = await Article.findById(request.params.id)
    articles.titre = request.body.titre,
    articles.description = request.body.description,
    articles.prix = request.body.prix

    try{
      const updatedArticle = await articles.save()
      response.json(updatedArticle)
    }catch(e){
      console.log(e);
    }
  }catch(e){
    console.log(e);
  }
})


router.delete('/:id', async (request, response) => {
  try{
    const article = await Article.findById(request.params.id)
    try{
      article.delete()
    }catch(error){
      console.log(error)
      response.json({'status': "ok", "message": "article supprime!"})
    }
  }catch(error){
    console.log(error)
  }
})

module.exports = router