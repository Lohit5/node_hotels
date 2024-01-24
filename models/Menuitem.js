const mongoose=require("mongoose");


const MenuitemSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy',"sour"],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredeints:{
        type:[String],
        enum:["chicken wings","spices","sauce"]
    },
    num_sales:{
        type:Number,
        default:0
    }
});


const Menuitem=mongoose.model("Menuitem",MenuitemSchema);

module.exports=Menuitem;

