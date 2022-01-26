const user = require("../models/invitado");

exports.insertarinvitado = async (req,res)=>{
    console.log(req.body);
    const {DNI_INVITADO, NOMRE_INVITADO, AP_PATERNO, AP_MATERNO, ASUNTO}=req.body;
    const nuevoinvitado=new user({DNI_INVITADO, NOMRE_INVITADO, AP_PATERNO, AP_MATERNO, ASUNTO});
    await nuevoinvitado.save();
    res.json(nuevoinvitado);
}

exports.consultarinvitado = async (req, res) =>{
    const consultarinvitado = await user.find();
    res.json(consultarinvitado);
}

exports.consultarinvitadoid = async (req,res) => {
    try{
        const {DNI_INVITADO, NOMRE_INVITADO, AP_PATERNO, AP_MATERNO, ASUNTO}=req.body;
        console.log(req.params.id);
        let invitadoid = await user.findById(req.params.id);
        console.log('Los datos del usuario son:',invitadoid);
        res.json(invitadoid);
    }
    catch (e){ res.send('Error de consulta id', e); }
}

exports.actualizarinvitadoid = async (req,res) => {
    try{
        const {DNI_INVITADO, NOMRE_INVITADO, AP_PATERNO, AP_MATERNO, ASUNTO}=req.body;
        console.log(req.params.id);
        let invitadoid = await user.findById(req.params.id);
        console.log('Los datos del usuario son:',invitadoid);
        res.json(invitadoid);
        if(!invitadoid)
        {
            res.send('No existe el usuario');
        }
        else
        {
            invitadoid.id_invitado=DNI_INVITADO;
            invitadoid.nombre=NOMRE_INVITADO;
            invitadoid.apellidopaterno=AP_PATERNO;
            invitadoid.apellidomaterno=AP_MATERNO ;
            invitadoid.asunto=ASUNTO;
            invitadoid = await user.findOneAndUpdate({
                    _id:req.params.id
                },
                invitadoid,{new:true}
            );
        }
    }
    catch (e){ res.send('Error de consulta id', e); }
}

/*exports.eliminarempleado = async (req,res) => {
    try{
        console.log(req.params.id);
        let empleadoid = await user.findById(req.params.id);
        console.log('Los datos del usuario son:',empleadoid);
        res.json(empleadoid);
        if(!empleadoid)
        {
            res.status(404).json('no existe el usuario');
        }
        else
        {
            usuarioid= await user.findOneAndDelete({_id:req.params.id});
            res.json('Empleado Eliminado');
        }
    }
    catch (e){ res.status(404).send('Error de consulta usuario id',e); }
}*/
