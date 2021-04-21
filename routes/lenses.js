const express = require('express')
const router = express.Router()

router.get('/new',(req,res)=>{
    res.render('lenses/new-lens')
})

router.post('/',(req,res)=>{
    
})

module.exports = router