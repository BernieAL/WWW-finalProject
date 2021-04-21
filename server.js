const express = require('express')
const pug = require('ejs')
const path = require("path");
const lensRouter = require('./routes/lenses')

const app = express()
const port = process.env.PORT || "3000";

app.set("views", path.join(__dirname, "views"));
app.set('view engine','ejs')
app.use('/lenses',lensRouter)

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

app.listen(port,()=>{
    console.log(`App running at port: ${port}`)
})

