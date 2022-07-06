const router = require("express").Router();

const entrenadorController = require("../controllers/entrenador")

router.post('/agregarEntrenador',entrenadorController.crearEntrenador)
router.get('/verEntrenadores',entrenadorController.obteterEntrenadores)
router.post('/actualizarEntrenadores',entrenadorController.actualizarEntrenador)



//router.get('./pokemon',pokemonController.obtenerPokemon)
/*

router.put('/pokemon',pokemonController.actualizarPokemon)

router.delete('/pokemon',pokemonController.borrarPokemon)

*/

module.exports = router