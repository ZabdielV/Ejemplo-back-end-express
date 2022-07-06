const Entrenador = require("../models/entrenador")

const mongoose=require("mongoose")

//CREATE
exports.crearEntrenador = async (req,res) =>{
    const esRepetido=await Entrenador.find({
        nombre:req.body.nombre
    })

    if(esRepetido.length===0){
        console.log("valor no repetido")
        const entrenador=new Entrenador(
           {
               _id:new mongoose.Types.ObjectId(),
               nombre:req.body.nombre,
               edad:req.body.edad,
               correo:req.body.correo,
               direccion:req.body.direccion,
               pokemons:[]
           }
                   )
               try{
                   await entrenador.save()
                    //console.log(carta)
                   console.log("entrenador registrado exitosamente")
                   res.json(
                       {
                           estatus:"entrenador registrada exitosamente"
                       }
                   )
                   }
                   catch(err){
                   console.log(err)
                   }
    } else{
       console.log("entrenador repetido")
       res.json({
           estatus:"Valor repetido en base de datos"
       })
          }
}

//READ
exports.obteterEntrenadores = (req,res)=>{
    Entrenador.find()
    .then((resultado)=>{
        res.json(resultado)
    console.log("Pokemons encontrados")
    })
    .catch(err=>console.log(err))
}

exports.actualizarEntrenador = async (req,res)=>{
    try{
        //console.log(req.body)
        await Entrenador.findOneAndUpdate({
            nombre:req.body.nombreEntrenador
        },{
            pokemons:req.body.listaNuevaPokemones
        })
        console.log("entrenador actualizado")
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