const { Router} = require("express");
const router = Router();
const ruta = '/api';
const peso_controllers = require('../controllers/peso_controllers')

//notas

router.post(ruta+'/peso',peso_controllers.create)



module.exports = routers;