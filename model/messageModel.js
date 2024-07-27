
const mongoose=require('mongoose');

const messageSchema=mongoose.Schema({
user:String,
messages:String,
timestamp:{type:Date,default:Date.now}
})
module.exports=mongoose.model('message',messageSchema)