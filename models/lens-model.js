//lens model

const mongoose = require('mongoose')

const lensSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:true,
    },
    Brand: {
        type:String,
        required: true,
    },
    BuildDate: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Lens',lensSchema)