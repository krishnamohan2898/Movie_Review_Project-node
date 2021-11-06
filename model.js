const mongoose = require('mongoose')

let MongooseSchema = mongoose.Schema

const moviSchema = new MongooseSchema(
    {
        moviename:String,
        actor:String,
        actress:String,
        director:String,
        releaseyear:String,
        camera:String,
        review:String
    }
)

var movireviewModel = mongoose.model('movis',moviSchema)

module.exports = {movireviewModel}