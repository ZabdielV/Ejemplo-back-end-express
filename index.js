const express = require("express")
const mongoose = require("mongoose")
const cors=require('cors')

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//modulos
const pokemonesRoutes=require("./routes/pokemon")
const entrenadoresRoutes=require("./routes/entrenador")

//Usar rutas
app.use("/pokemones",pokemonesRoutes)
app.use("/entrenadores",entrenadoresRoutes)


//appweb.use("/",pokemonRoutes)

//appweb.get("/prueba",(req,res)=>{
  //  res.send("Prueba del servidor funcionando")
//})

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    app.listen(8081,()=>console.log("Servidor en linea"))
})
.catch((err=>console.log(err)))


//mongodb://localhost:27017/test
//mongodb://user7:root@54.227.9.233:27017/base07?authSource=admin