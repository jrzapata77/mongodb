const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');
// aca van las rutas del crud
router.post('/', ClienteController.agregarClientes);
router.get('/', ClienteController.mostrarClientes);
router.get('/:id', ClienteController.mostrarUnClientes);
router.delete('/:id', ClienteController.eliminarClientes);
router.put('/:id', ClienteController.modificarCliente);




module.exports = router;