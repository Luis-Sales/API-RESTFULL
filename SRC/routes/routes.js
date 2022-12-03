const router = require('express').Router()
const ProductController = require('../controllers/products')

router.get('/products', ProductController.get)
router.post('/products', ProductController.post)

module.exports= router