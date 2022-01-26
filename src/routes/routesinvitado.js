const Router = require('express');
const router = Router();

const invitadocontrolador = require("../controladores/invitado.controlador");
router.post('/',invitadocontrolador.insertarinvitado);
router.get('/',invitadocontrolador.consultarinvitado);
router.get('/:id',invitadocontrolador.consultarinvitadoid);
router.put('/:id',invitadocontrolador.actualizarinvitadoid);
//router.delete('/:id',invitadocontrolador.eliminarinvitado);

module.exports= router;
