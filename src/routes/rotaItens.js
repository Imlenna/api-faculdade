const express = require('express');

const router = express.Router();

const itens =[
    {
    id: 1,
    item: 'colher'
    },
    {
        id: 2,
        item: 'faca'  
    },
    {
        id: 3,
        item: 'garfo'
    },
    {
        id: 4,
        item: 'prato'
    }
];


router.get('/',function(req,res, next){
    res.json(itens);
});

router.get('/:id',function(req,res, next){
    const itemLocalizado = itens.find(item=>item.id === Number(req.params.id));
    
    if(!itemLocalizado){
        return res.status(404).json({msg:"não encontrado"});
    }
    res.json(itemLocalizado);
});

module.exports = router;