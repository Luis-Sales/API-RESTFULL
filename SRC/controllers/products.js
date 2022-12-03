const ProductsModel = require('../models/products')

async function get(req, res){

  const products = await ProductsModel.find()
  
  //console.log(products)
  res.send(products)
    
    
}

async function post(req, res){
    const   {
      name,
      marca,
      preco,
    } = req.body

    const product = new ProductsModel({
      name,
      marca,
      preco
    })

    product.save()

    res.send()
}

module.exports = {
    get,
    post
}