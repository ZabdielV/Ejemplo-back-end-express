const mongoose = require("mongoose")
//Dedinir esquema-> estructura del documento de entrada en la colección
//Entrenador, nombre, dirección, correo electrónico, edad y un arreglo con todos los pokemones que tiene (puede tener 0 hasta n pokemones).
const EntrenadorEsquema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    edad:{
        type:Number,
        required: true
    },
    correo:{
        type:String,
        required: false
    },
    direccion:{
        type:String,
        required: false
    },
    //Arreglo de pokemons
    pokemons:[]
},{collection:'coleccionEntrenador'})

//Exporta el modelo a partir del esquema definido
module.exports = mongoose.model('entrenador',EntrenadorEsquema)

