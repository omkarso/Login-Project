const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/LoginProject").then(p=>console.log("Server Successfully Connected")).catch(err=>console.log(err))

const rows=mongoose.Schema({
"username":String,
"email":String,
"password":String,
"cpassword":String
})
const model=mongoose.model('signups',rows)
model.find().then(p=>console.log(p)).catch(err=>console.log(err))
module.exports=model