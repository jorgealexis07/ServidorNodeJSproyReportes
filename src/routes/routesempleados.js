const Router = require('express');
const router = Router();

const empleadocontrolador = require("../controladores/empleados.controlador");
router.post('/',empleadocontrolador.insertarempleado);
router.get('/',empleadocontrolador.consultarempleados);
router.get('/:id',empleadocontrolador.consultarempleadoid);
router.put('/:id',empleadocontrolador.actualizarusuarioid);
router.delete('/:id',empleadocontrolador.eliminarempleado);

module.exports= router;
