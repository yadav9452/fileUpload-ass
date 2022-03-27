const express=require("express");
// const { contentType } = require("express/lib/response");
const connect=require("./configs/db");
const userController=require("./controllers/user.controller");

const app=express();


app.use(express.json()); 

app.use("/users",userController);

app.listen(5000, async()=>{
    try{
        await connect();
    }catch(err){
        console.log(err);
    }
    console.log("Listening on Port 5000");
})