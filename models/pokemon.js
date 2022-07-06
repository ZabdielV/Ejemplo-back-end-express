const mongoose = require("mongoose")
//Dedinir esquema-> estructura del documento de entrada en la colección
//Pokemon, nombre, tipo, evolución, peso,  descripción, ataque, estado (si ya está adoptado o no).
const PokemonEsquema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    tipo:String,
    evolucion:{
        type:String,
        required: false
    },
    peso:{
        type:Number,
        required: false
    },
    descripcion:{
        type:String,
        required: false
    },
    ataque:{
        type:String,
        required: false
    },
    estado:{//Checar!!!!!!!!!!!!!!!!!!!!!!!!!!!!!###########################
        type: Boolean,
        required:true
    },
    img:{
        type: String,
        required: false
    }
},{collection:'coleccionPokemon'})

//Exporta el modelo a partir del esquema definido
module.exports = mongoose.model('pokemon',PokemonEsquema)





