const mongoose=require('mongoose')

const mongoURL="mongodb+srv://rohitpatra616:patra%40123@cluster0.pidgf2i.mongodb.net/hotel"


mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


const db=mongoose.connection;


db.on("connected",()=>{
    console.log("connnected to mongodb server")
});


db.on("error",()=>{
    console.error("db connectoion error")
})

db.on("disconnected",()=>{
    console.log("mongodb disconnected")
});



module.exports=db;