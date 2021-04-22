//lens model

const mongoose = require('mongoose')

const lensSchema = new mongoose.Schema({
    Name: {
        type: String,
        
    },
    Brand: {
        type:String,
        
    },
    BuildDate: {
        type: String,
        
    },
    Description: {
        type: String,
        
    },
    Price: {
        type: Number,
    }
})

module.exports = mongoose.model('Lens',lensSchema)