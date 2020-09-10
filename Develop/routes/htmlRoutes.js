const router= require("express").Router();
const path= require("path");
const { model } = require("../models/workout");
router.get("/exercise",(req,res)=>{
    console.log("ITS THE EXERCISES")
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
})
module.exports =router