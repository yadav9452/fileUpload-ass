const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({

    firstName:{type:String, required:true},
    // lastName:{type:String, required:true},
    // email:{type:String, required:true},
    // password:{type:String, required:true},
    // age:{type:String, required:true},
    ProfilePic:[{type:String, required:true}],
},{
    versionKey:false,
    timestamps:true,
})

const User=mongoose.model("useruploads",userSchema);
module.exports=User;