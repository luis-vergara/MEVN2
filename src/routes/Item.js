const express = require ('express');
const router = express.Router();

const Item = require('../models/item');


router.get('/:id',(req,res, next)=>{
    Item.findById(req.params.id,(err,item)=>{
        res.json(item);
    })
});

//get data-/item
router.get('/',(req,res)=>{
    Item.find((err,items)=>{
        if(err){throw err;}
        else{
            res.json(items);
        }
    })
});

//add data - /item -POST
router.post('/',(req,res)=>{
    const item = new Item(req.body);
    item.save()
        .then(item=>{
            res.status(200).json({item:'Item agregardo!'});
        })
        .catch(err =>{
            res.status(400).send({item:'Error al Agregar el item'});
        })
});

//update data/item/
router.put('/:id',(req,res,next)=>{
    Item.findById(req.params.id,(err,item)=>{
        if(!item){
            return next(new Error('no se pudo cargar documento'));
        }else{
            item.name = req.body.name;
            item.price = req.body.price;
            item.save()
            .then(item =>{
                res.json('Update complete')
            })
            .catch(err =>{
                res.status(400).send('No se pudo Actualizar');
            });
        }
    })
});
router.delete('/:id',(req,res,next)=>{
    Item.findByIdAndRemove(req.params.id,(err,item)=>{
        if(err){res.json(err);}
        else{
            res.json('item eliminado')
        }
    })
});
module.exports = router;