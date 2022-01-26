const {Schema,model} = require('mongoose');
const esquemaempleados = new Schema({

    DNI_EMPLEADO:{
        type:String,
        require: true
    },
    NOMBRE_EMPLEADO:{
        type:String,
        require: true
    },
    AP_PATERNO:{
        type:String,
        require: true
    },
    AP_MATERNO:{
        type:String,
        require: true
    },
    TELEFONO:{
        type:String,
        require: true
    },
    EDAD:{
        type:String,
        require: true
    },
    PUESTO:{
        type:String,
        require: true
    }
});
module.exports= model('empleados',esquemaempleados);
