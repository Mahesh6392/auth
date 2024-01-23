const express = require("express")
const mongoose = require("mongoose")
const app = express()
const EmployeeModel = require("./models/Employee")
const cors = require("cors")

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("password incorrect")
            }
        }else{
            res.json("no record existed")
        }
    })
})
app.post("/register",(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err =>res.json(err))
    
})

app.listen(3001 , ()=>{
    console.log("server runnung at 3001")
})