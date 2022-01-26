const {Schema,model} = require('mongoose');
const esquemainvitado = new Schema({

    DNI_INVITADO:{
        type:String,
        require: true
    },
    NOMRE_INVITADO:{
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
    ASUNTO:{
        type:String,
        require: true
    }
});
module.exports= model('invitados',esquemainvitado);
