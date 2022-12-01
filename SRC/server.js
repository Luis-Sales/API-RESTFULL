const express = require('express')
const path = require('path')
//const mongoose = require('mongoose')

const routes = require('./routes/routes')
//const db = require('./database')

const app = express()

// conexão com o BD
//db.connect() 

//Dados via formulario post
app.use(express.urlencoded({extended: true}))

//definino as rotas
// app.use('/', routes)
app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(8080, ()=> console.log(`Serve escultando na porta ${port}`)  ) 
