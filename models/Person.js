const mongoose=require("mongoose");



const personSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    work:{
        type:String,
        enum:["chef","maneger","waiter"],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    age:{
        type:Number
    }
})


const Person=mongoose.model("Person",personSchema);
module.exports=Person;
