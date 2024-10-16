import mongoose from "mongoose";

//Definig Schema for comic
const comicSchema = new mongoose.Schema({
    bookName:{type:String},
    authorName:{type:String},
    yop:{type:Number},
    price:{type:mongoose.Decimal128},
    discount:{type:mongoose.Decimal128},
    nop:{type:Number},
    condition:{type:String},
    description:{type:String},
})

//Defining Model for comic
const ComicModel = mongoose.model('comic',comicSchema) 

export default ComicModel;