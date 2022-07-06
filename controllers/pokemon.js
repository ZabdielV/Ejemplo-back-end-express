
const mongoose=require("mongoose")

const Pokemon = require("../models/pokemon")
//CREATE
/*
exports.crearPokemon = async (req,res) =>{
    const pokemon = new Pokemon(req.body);
    try{
        await pokemon.save()
        console.log(pokemon)
        console.log("Pokemon registrado")
    }
    catch(err){
        console.log(err)
    }
}*/
exports.crearPokemon =async (req,res)=>{
    const esRepetido=await Pokemon.find({
        nombre:req.body.nombre
    })

    if(esRepetido.length===0){
        console.log("valor no repetido")
     
        
        const pokemon=new Pokemon(
           {
               _id:new mongoose.Types.ObjectId(),
               nombre:req.body.nombre,
               tipo:req.body.tipo,
               evolucion:req.body.evolucion,
               peso:req.body.peso,
               descripcion:req.body.descripcion,
               ataque:req.body.ataque,
               estado:false,
               img:req.body.img
           }
                   )
               try{
                   await pokemon.save()
                    //console.log(carta)
                   console.log("pokemon registrado exitosamente")
                   res.json(
                       {
                           estatus:"pokemon registrada exitosamente"
                       }
                   )
                   }
                   catch(err){
                   console.log(err)
                   }
    } else{
       console.log("pokemon repetido")
       res.json({
           estatus:"Valor repetido en base de datos"
       })
          }

}

//READ
exports.obtenerPokemon = (req, res) => {
    Pokemon.find()
        .then(pokemon => {
            console.log(pokemon)
            res.json(pokemon)
        })
        .catch(error => {
            console.log(error)

            res.json({
                estado: "error"
            })
        })
}

exports.actualizarPokemon = async (req,res)=>{
    try{
        
        await Pokemon.findOneAndUpdate({
            nombre:req.body.nombre
        },{
            tipo:req.body.tipo,
            evolucion:req.body.evolucion,
            peso:req.body.peso,
            descripcion:req.body.descripcion,
            ataque:req.body.ataque,
            img:req.body.img
        })
        console.log("pokemon actualizado")
        res.json({
            estatus:"Valor actualizado correctamente"
        })
    
    }
    catch(err){
        console.log(err)
        res.json({
            estatus:"nombre no existe o es incorrecto"
        })
    }

}

//Delete
exports.borrarPokemon = async (req,res)=>{
    try{
        await Pokemon.findOneAndRemove({nombre:req.body.pokemonEliminado})
        console.log("pokemon eliminado")
        res.json({
            estatus:"pokemon eliminado"
        })
    }
    catch(err){
        console.log(err)
        res.json({
            estatus:"nombre no existe o incorrecto"
        })
    }
}