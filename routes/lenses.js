// //ROUTER FOR ALL THINGS /lenses

// const Lens = require('../models/lens-model')
// const express = require('express')
// const router = express.Router()

// router.get('/new',(req,res)=>{
//     res.render('lenses/new-lens',{lens: new Lens()})
// })


// router.get('/',async(req,res)=>{
//     //const t = await Lens.find()
//     res.redirect('/')
// })


// router.get('/all',async(req,res)=>{
//     //const t = await Lens.find()
//     res.redirect('/')
// })


// // router.get('/buy',(req,res)=>{
// //     res.send(req.params.id)
// //     //const lens = await Lens.findById(req.params.id)
// //     //const searchQuery = `${lens.Brand} ${lens.Name}`
// //     res.render('/')

// // })

// router.get('/:id', async (req,res,next)=>{
//     const lens = await Lens.findById(req.params.id)
//     if(lens == null)res.redirect('/')
//     res.render('lenses/show',{lens:lens})
    
// })




// router.post('/',async (req,res)=>{
    
//     //make new lens using lens model
//     let lens = new Lens({
//         Name: req.body.Name,
//         Brand: req.body.Brand,
//         BuildDate: req.body.BuildDate,
//         Description: req.body.Description,
//         Price: req.body.Price
//     })
//     try{
//         lensID = await lens.save()
//         res.redirect(`/lenses/all`)
//     } catch(e){
//         console.log(e)
//         res.render('lenses/new-lens',{lens: lens})
//     }
// })

// module.exports = router