const router = require("express").Router();

const pokemonController = require("../controllers/pokemon")

router.post('/agregarPokemon',pokemonController.crearPokemon)
router.get('/verPokemones',pokemonController.obtenerPokemon)
router.post('/actualizarPokemon',pokemonController.actualizarPokemon)
router.post('/eliminarPokemon',pokemonController.borrarPokemon)


//router.get('./pokemon',pokemonController.obtenerPokemon)
/*

router.put('/pokemon',pokemonController.actualizarPokemon)

router.delete('/pokemon',pokemonController.borrarPokemon)
               "nombre":"Charmander 05",
               "tipo":"Fuego",
               "evolucion":"",
               "peso":17,
               "descripcion":"rojo",
               "ataque":"impactrueno",
               "estado":false,
               "image":"https://img.joomcdn.net/c81c9194e48d20aa5e1fb28bc82bad20bd73b708_original.jpeg"
*/

module.exports = router