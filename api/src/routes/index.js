const { Router } = require('express');
const getDogsHandler = require('../handlers/getDogsHandler');
const getDogsIdHandler = require('../handlers/getDogsIdHandler');
const getDogByNameHandler = require('../handlers/getDogByName');
const postDogsHandler = require('../handlers/postDogsHandler');
const getTemperamentsHandler = require('../handlers/getTemperamentsHandler');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", getDogsHandler);
router.get("/dogs/:id", getDogsIdHandler);
router.get("/dogsname", getDogByNameHandler);
router.post("/dogs", postDogsHandler);
router.get("/temperaments", getTemperamentsHandler);

module.exports = router;
