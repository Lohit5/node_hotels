const express = require("express");
const router = express.Router();

const Menuitem = require("../models/Menuitem");


router.post("/", async (req, res) => {
    try {
        const data = req.body;

        const newMenu = new Menuitem(data);
        const response = await newMenu.save();
        console.log("saved on database", response);
        res.status(200).json(response)


    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "internal server error" })
    }
});


router.get("/", async (req, res) => {
    try {
        const response = await Menuitem.find();
        console.log("data get from database", response);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(402).json({ error: "internal server error" })
    }



})


router.get("/:tastetype", async (req, res) => {

    const tastetype = req.params.tastetype;

    try {
        if (tastetype == "sweet" || tastetype == "spicy" || tastetype == "sour") {
            const response = await Menuitem.find({ taste: tastetype })
            console.log("get the taste", response)
            res.status(200).json(response)
        } else {
            console.log("not tasty")
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "not found" })
    }
});


router.put("/:id", async (req, res) => {
    try {
        const menuid = req.params.id;
        const updatemenu = req.body;
        const response = await Menuitem.findByIdAndUpdate(menuid, updatemenu, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(404).json({ message: "menu is not found" })
        }
        console.log(response, "data updated");
        res.status(200).json({ message: "menu item updated successfully" })



    } catch (error) {
        console.log(error);
        res.status(402).json({ error: "internal server error" });

    }
});



router.delete("/:id",async(req,res)=>{
    try{
        const menuid=req.params.id;
        const response=await Menuitem.findByIdAndDelete(menuid);
        if(!response){
            return res.status(404).json({message:"menu list is not found"})
        }
        console.log("intem delted",response);
        res.status(200).json({message:"menu item deleted successfully"})
    }catch(error){
        console.log(error);
        res.status(402).json({ error: "internal server error" });

    }
})




module.exports = router;
