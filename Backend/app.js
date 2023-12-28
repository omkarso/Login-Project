const bodyParser = require('body-parser');
const express=require('express');
const cors = require('cors');
const app =express();
const model =require('./db.js');
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    tabel.find().then(p=>console.log(p)).catch(err=>console.log(err))
});
app.post('/', (req, res) => {
   const data=new model ({
    "username":req.body.username,
    "email":req.body.email,
    "password":req.body.password,
    "cpassword":req.body.cpassword
   })
   data.save().then(a=>res.send({"message":"data Saved"})).catch(err=>console.log(err))
});
app.post("/logon",(req,res)=>
{
model.find({"username":req.body.username}).then(p=>
    {
        if(p[0].username===req.body.username && p[0].password===req.body.password)
        {
            res.send({"msg":"Login Successfull"})
        }
        else{
res.send({"msg":"Login Failed"})
        }
    }).catch(err=>res.send({"msg":"Invalid-User"}))
}
)

app.listen(3000, (err) => {
    if(!err){
    console.log('Server On');}
});
