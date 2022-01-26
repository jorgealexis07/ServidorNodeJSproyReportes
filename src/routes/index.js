const  {Router} = require('express');
const router = Router();
const d = require('../routes/datos.json');
const _ = require('underscore');
console.log(d);
router.get('/', (req, res)=>{
/*    const datos = {
        "Titulo": "Hola mundo",
        "Año": "2021",
        "Periodo" : "segundo" }*/
    res.json(d);
});
router.post('/', (req,res)=>{
    console.log(req.body);
    const { Id, Titulo, Año, Periodo }=req.body;
    if(Id && Titulo && Año && Periodo)
    {
        const nuevoregistro = {...req.body};
        d.push(nuevoregistro);
        res.send(d);
    }
    else {
        res.send('Error hacer la peticion');
    }
});
router.delete('/:Id',(req,res)=>{
    const {Id} = req.params;
    _.each(d,(registros, i)=>{
        if(registros.Id == Id){
            d.splice(i,1);
            res.json(d);
        }
    })
    res.send('Eliminado');
});
//para actualizar o editar
router.put('/:Id',(req,res)=>{
    const {Id}= req.params;
    const { Titulo, Año, Periodo} = req.body;
    if (Titulo && Año && Periodo){
        _.each(d,(registros, i)=>{
            if(registros.Id == Id){
                registros.Titulo = Titulo;
                registros.Año = Año;
                registros.Periodo = Periodo;
                res.json(d);
            }
        })
    }
});
module.exports = router;
