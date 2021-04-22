const express = require('express')
const pug = require('ejs')
const path = require("path");
const mongoose = require('mongoose')
const chalk = require('chalk')
const Lens = require('./models/lens-model')
const bot = require('./botScript.js')
var request = require('request');



const app = express()
const port = process.env.PORT || "3000";

//DB
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true,useUnifiedTopology:true})
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
    
    const lens = await Lens.findById(req.params.id)  
    res.send('Opening External Buy Window...')
    await bot.Buy(lens)
    
})
app.get('/lenses/:id/buy',async(req,res)=>{
    
    const lens = await Lens.findById(req.params.id)  
    res.send('Opening External Buy Window...')
    await bot.Buy(lens)
    
    
    //ALT ROUTE OPTION
    // request(`http://www.ebay.com/${lens.Name}`, function (error, response, body) {
    //       console.log('error:', error); // Print the error if one occurred and handle it
    //       console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //       res.send(body)
    // });

})

app.get('/lenses/all',async(req,res)=>{
    //const t = await Lens.find()
    res.redirect('/')
})

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


app.listen(port,()=>{
    console.log(`App running at port: ${port}`)
})




//https://stackoverflow.com/questions/43787515/making-external-get-request-with-express