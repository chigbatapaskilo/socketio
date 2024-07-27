const mongoose=require('mongoose');
require('dotenv').config();
const Url=process.env.dataBase_Url
mongoose.connect(Url)
.then(()=>{
    console.log('connection to db successful');
})
.catch((error)=>{
console.log({
message:'unable to connect to database because',
errorMessage:error.message
})
})