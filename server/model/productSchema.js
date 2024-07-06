const mongoose=require('mongoose')

const product={
    imageURL:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}
const ProductSchema=mongoose.Schema(product)
module.exports=mongoose.model('Product',ProductSchema)