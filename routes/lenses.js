//ROUTER FOR ALL THINGS /lenses

const Lens = require('../models/lens-model')
const express = require('express')
const router = express.Router()

router.get('/new',(req,res)=>{
    res.render('lenses/new-lens',{lens: new Lens()})
})

router.get('/:id', async (req,res)=>{
    const lens = await Lens.findById(req.params.id)
    if(article == null)res.redirect('/')
    res.render('lenses/show',{lens:lens})
})

router.post('/',async (req,res)=>{
    
    //make new lens using lens model
    let lens = new Lens({
        Name: req.body.Name,
        Brand: req.body.Brand,
        BuildDate: req.body.BuildDate,
        Description: req.body.Description,
    })
    try{
        lensID = await lens.save()
        res.redirect(`/lenses/${lensID}`)
    } catch(e){
        console.log(e)
        res.render('lenses/new-lens',{lens: lens})
    }
})

module.exports = router