const mongoose=require("mongoose");



const TaskSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:[String],
        enum:["high","medium","low"],
        default:"medium"
    },
    dueDate:{
        type:Date,
        required:true
    }

})

const Task=mongoose.model("Task",TaskSchema);
module.exports=Task;


