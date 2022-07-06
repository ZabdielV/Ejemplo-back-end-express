const mongoose = require("mongoose")

//usuario:password@IP:Puerto/bd_nombre?authSource=db_usuarios

mongoose.connect('mongodb://pokemon:root@54.227.9.233:27017/pokemon?authSource=admin')
.then(()=>console.log("Conexión exitosa a la base Pokemon"))
.catch((err=>console.log(err)))

const PokemonEsquema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    tipo:[String],
    evolucion:{
        type:String,
        required: false
    },
    peso:{
        type:String,
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

//Crear el modelo a partir del esquema definido
const Pokemon = mongoose.model('coleccionPokemon',PokemonEsquema)

//Agregar un documento  no se guarda en la BD para eso hacemos operaciones CRUD
const pokemon1 = new Pokemon({
    _id: new mongoose.Types.ObjectId(),
    nombre:"Dragonite",
    tipo:["dragon","volador"],
    peso:"80 kg",
    descripcion:"Es un Pokémon de buen corazón que guía hasta tierra a los barcos que se encuentran perdidos en plena tormenta y a punto de zozobrar.",
    ataque:"Vendaval",
    estado: true, //disponible
    img:""


})

//CRUD
//Metodo de instancia
//CREATE

pokemon1.save()
    .then(()=>{
        console.log(pokemon1)
        console.log("Pokemon creado")
    })
    .catch(err=>console.log(err))
/*

//READ
//Metodo de clase
//Pokemon es el modelo (La clase general)
Pokemon.find()
.then((resultado)=>{
    console.log(resultado)
    console.log("Pokemones encontrado")
})
.catch(err=>console.log(err))

//SPECIFIC READ with filter
Pokemon.find()
.then((resultado)=>{
    console.log(resultado[3])
    console.log("Pokemon encontrado")
})
.catch(err=>console.log(err))

//SPECIFIC READ filter
Pokemon.find({tipo:"agua"})
.then((resultado)=>{
    console.log(resultado)
    console.log("Tipo encontrado")
})
.catch(err=>console.log(err))
//Read finds the first one
Pokemon.findOne()
.then((resultado)=>{
    console.log(resultado)
    console.log("FindONE encontrado")
})
.catch(err=>console.log(err))

//READ Pokemons en adopción
Pokemon.find()
.then((resultado)=>{
    console.log(resultado.estado["true"])
    console.log("Pokemons en adopción")
})
.catch(err=>console.log(err))

//UPDATE
async function updatePoke(){
    try{
        //Condición y cambio
        await Pokemon.findOneAndUpdate({nombre:"Pikachu"},{tipo:["Psiquico"]})//,{evolucion},{peso},{descripcion},{ataque},{estado},{img})
        let newPoke = await Pokemon.findOne({nombre:"Pikachu"})
        console.log(newPoke)
        console.log("Pikachu cambio su tipo")
    }catch(err){
        console.log(err)
    }
}
//updatePoke()

//DELETE

const deletePoke = async ()=>{
    await Pokemon.findOneAndRemove({nombre:"Pikachu"})
    console.log("Pokemon borrado :))")
    let checkPoke = await Pokemon.find()
    console.log(checkPoke)

}
deletePoke()
*/