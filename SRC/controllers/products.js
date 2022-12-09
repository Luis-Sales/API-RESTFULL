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

    res.send({
      message: 'sucess'
    })
}

async function put(req, res ){
  const {id} = req.params

  const product = await ProductsModel.findOneAndUpdate({ _id: id}, req.body ,{new : true})

  res.send({
    message: 'sucess',
    product,
  })
}

async function remove(req, res){
  const {id} = req.params

  const remove = await ProductsModel.deleteOne({ _id: id })

 const message = remove.deletedCount ? 'sucess' : 'error'

 res.send({
  message
 })

}

module.exports = {
    get,
    post,
    put,
    remove
}