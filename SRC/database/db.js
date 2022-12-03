const mongoose = require('mongoose');

function connect (){
    mongoose.connect('mongodb://localhost:27017/api-restful', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Conectado ao DB"))
        
}

module.exports = {
	connect
}

