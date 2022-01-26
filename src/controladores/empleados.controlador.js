const user = require("../models/empleados");

exports.insertarempleado = async (req,res)=>{
    console.log(req.body);
    const {DNI_EMPLEADO, NOMBRE_EMPLEADO, AP_PATERNO, AP_MATERNO, TELEFONO, EDAD, PUESTO}=req.body;
    const nuevoempleado=new user({DNI_EMPLEADO, NOMBRE_EMPLEADO, AP_PATERNO, AP_MATERNO, TELEFONO, EDAD, PUESTO});
    await nuevoempleado.save();
    res.json(nuevoempleado);
}

exports.consultarempleados = async (req, res) =>{
    const consultarempleado = await user.find();
    res.json(consultarempleado);
}

exports.consultarempleadoid = async (req,res) => {
    try{
        const {DNI_EMPLEADO, NOMBRE_EMPLEADO, AP_PATERNO, AP_MATERNO, TELEFONO, EDAD, PUESTO}=req.body;
        console.log(req.params.id);
        let empleadoid = await user.findById(req.params.id);
        console.log('Los datos del usuario son:',empleadoid);
        res.json(empleadoid);
    }
    catch (e){ res.send('Error de consulta id', e); }
}

exports.actualizarusuarioid = async (req,res) => {
    try{
        const {DNI_EMPLEADO, NOMBRE_EMPLEADO, AP_PATERNO, AP_MATERNO, TELEFONO, EDAD, PUESTO}=req.body;
        console.log(req.params.id);
        let empleadoid = await user.findById(req.params.id);
        console.log('Los datos del usuario son:',empleadoid);
        res.json(empleadoid);
        if(!empleadoid)
        {
            /*res.send('No existe el usuario');*/
            res.status(464).json('No existe el usuario');
        }
        else
        {
            empleadoid.DNI_EMPLEADO=DNI_EMPLEADO;
            empleadoid.NOMBRE_EMPLEADO=NOMBRE_EMPLEADO;
            empleadoid.AP_PATERNO=AP_PATERNO;
            empleadoid.AP_MATERNO=AP_MATERNO ;
            empleadoid.TELEFONO=TELEFONO;
            empleadoid.EDAD=EDAD;
            empleadoid.PUESTO=PUESTO;
            empleadoid = await user.findOneAndUpdate({
                _id:req.params.id
            },
                empleadoid,{new:true}
            );
            res.json(empleadoid);
        }
    }
    catch (e){ res.send('Error de consulta id', e); }
}

exports.eliminarempleado = async (req,res) => {
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
    catch (e){ console.log(e);
        res.status(464).json('Error de consulta usuario id');}
}
  
