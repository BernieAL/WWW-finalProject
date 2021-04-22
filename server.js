const express = require('express')
const pug = require('ejs')
const path = require("path");
const lensRouter = require('./routes/lenses')
const mongoose = require('mongoose')
const chalk = require('chalk')
const Lens = require('./models/lens-model')



const app = express()
const port = process.env.PORT || "3000";

//DB
require('dotenv').config()


mongoose.connect('mongodb+srv://balmanzar883:test123@cluster0.xq6lw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection
db.on('error',(error)=> console.log(chalk.redBright('Not able to connect: ' + error)))
db.once('open', ()=>{})


app.set("views", path.join(__dirname, "views"));
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false}))



app.get('/',async(req,res)=>{
    const lenses = await Lens.find()  //gets all articles
    res.render('lenses/index',{lenses: lenses})
})


app.get('/new',(req,res)=>{
    res.render('lenses/new-lens',{lens: new Lens()})
})

app.get('/buy',async(req,res)=>{
    
    const lens = await Lens.find()  //gets all articles
    res.render('lenses/buy',{lens: lens})
    
})

app.get('/lenses/:id/buy',async(req,res)=>{
    
    const lens = await Lens.find()  //gets all articles
    res.render('lenses/buy',{lens: lens})
    
})



// app.get('/',async(req,res)=>{
//     //const t = await Lens.find()
//     res.redirect('/')
// })


app.get('/lenses/all',async(req,res)=>{
    //const t = await Lens.find()
    res.redirect('/')
})


// router.get('/buy',(req,res)=>{
//     res.send(req.params.id)
//     //const lens = await Lens.findById(req.params.id)
//     //const searchQuery = `${lens.Brand} ${lens.Name}`
//     res.render('/')

// })

app.get('/lenses/:id', async (req,res,next)=>{
    const lens = await Lens.findById(req.params.id)
    if(lens == null)res.redirect('/')
    res.render('lenses/show',{lens:lens})
    
})

app.post('/',async (req,res)=>{
    
    //make new lens using lens model
    let lens = new Lens({
        Name: req.body.Name,
        Brand: req.body.Brand,
        BuildDate: req.body.BuildDate,
        Description: req.body.Description,
        Price: req.body.Price
    })
    try{
        lensID = await lens.save()
        res.redirect(`/lenses/all`)
    } catch(e){
        console.log(e)
        res.render('lenses/new-lens',{lens: lens})
    }
})

//app.use('/lenses',lensRouter)

app.listen(port,()=>{
    console.log(`App running at port: ${port}`)
})

