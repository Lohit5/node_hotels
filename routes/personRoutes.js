const express = require("express");
const router = express.Router();
const Person=require("../models/Person")


router.get("/", async (req, res) => {
    try {
        const response = await Person.find();
        console.log("data saved", response);
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" })
    }

})



router.get("/:worktype", async(req,res)=>{
    try{
        const worktype=req.params.worktype;
          if(worktype=="waiter" || worktype=="chef" || worktype=="maneger"){
            const response=await Person.find({work:worktype});
            console.log(response,"response fetched");
            res.status(200).json(response)
   
          }else{
            console.log("invalid worktype")
          }
        

    }catch(error){
        console.log(error);
        res.status(401).json({error:"worktype not found"})
    }
})

router.post("/", async (req, res) => {
    try {
        const data = req.body;

        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" })
    }


});



    router.put("/:id",async(req,res)=>{
        try{
            const personid=req.params.id;
            const updateperson=req.body;
            const response=await Person.findByIdAndUpdate(personid,updateperson,{
                new:true,
                runValidators:true
                
            });
            console.log(response,"get the personid");
            res.status(200).json(response)
            
            
            
             if(!response){
              return  res.status(404).json({error:"person is notfound "})
             }

        }catch(error){
            console.log(error);
            res.status(401).json({erro:"id is not found"})
        }
    })

    router.delete("/:id",async(req,res)=>{
        try{
            const personid=req.params.id;
             const response=await Person.findByIdAndDelete(personid);
             if(!response){
                return res.status(404).json({error:"person is not found"})
             }
             console.log("data deleted ",response);
             res.status(200).json({message:"person deleted successfully"});
        }catch(error){
             console.log(error);
             res.status(401).json({error:"internal server error"})
        }
    })







module.exports=router;
