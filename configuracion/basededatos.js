const mongoose = require('mongoose');
const cadena = 'mongodb+srv://jorge:yamaha123@clustermongo.jvhs8.mongodb.net/modreportes';
mongoose.connect(cadena,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(db=> console.log('BD CONECTADA'))
    .catch(e=>console.log(e));
