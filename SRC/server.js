const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')



const routes = require('./routes/routes')
const db = require('./database/db')

const app = express()


// conexão com o BD
db.connect() 


// Dados via json
app.use(express.json())

//habilita CORS
app.use(cors({
    origin:'http://127.0.0.1:5500'
}))

//definino as rotas
// app.use('/', routes)
app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(8080, ()=> console.log(`Serve escultando na porta ${port}`)  ) 


