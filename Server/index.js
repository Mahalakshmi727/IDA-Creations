 const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')

const app =express()
let control = require('../Server/controller/controller') 


app.use(cors())

let port = 5000;
app.use(express.json())
let data = "mongodb+srv://mahalakshmi05:1234cluster@cluster0.rxszhti.mongodb.net/";

mongoose.set ("strictQuery",false) 
mongoose.connect(data, { useNewUrlParser:true, useUnifiedTopology:true}).then((res)=>{     //mongodb connection string  patrser ...depricated
    console.log("connected")
})
.catch ((res)=>{
    console.log(res,"failed")
})

app.get("/get",control.getting)
app.post("/post",control.posting)
//app.post ("/update/:idnumber",control.update)
// app.post("/delete/:idnumber",control.delete)

app.listen(port,()=>{
console.log("Listening to port 5000")
})

