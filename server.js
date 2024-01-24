const express = require('express');
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json())

const Task = require("./models/Task");
const personRoutes=require("./routes/personRoutes");


app.use("/person",personRoutes)

const menuRoutes=require("./routes/menuRoutes");

app.use("/menu",menuRoutes);



app.post("/api/tasks", async (req, res) => {
    try {
        const data = req.body;
        const newTask = new Task(data);
        console.log("filte eneterd")
        const response = await newTask.save();
        console.log("data saved on db", response);
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "internal server error" })
    }
});

app.get("/api/tasks", async (req, res) => {
    try {
        const response = await Task.find();
        console.log("get from db", response);
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(402).json({ error: "internal server error" })
    }
})




app.listen(4000, () => {
    console.log("server started at 4000")
});






