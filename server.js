const express = require('express')
const pug = require('ejs')
const path = require("path");
const lensRouter = require('./routes/lenses')
const mongoose = require('mongoose')
const chalk = require('chalk')



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



app.get('/',(req,res)=>{
    const lenses = [{
        name:'35mm F1.4 AI-S',
        Brand: 'Nikon',
        BuildDate: '1977',
        Description: 'Prime 9 blade aperture'
    },{
        name:'35mm F1.4 AI-S',
        Brand: 'Nikon',
        BuildDate: '1977',
        description: 'Prime 9 blade aperture'
    },
    ]
    res.render('lenses/index',{lenses: lenses})
    
})

app.use('/lenses',lensRouter)

app.listen(port,()=>{
    console.log(`App running at port: ${port}`)
})

