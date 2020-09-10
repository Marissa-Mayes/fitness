const express = require('express')
const Router = express.Router()
const db = require("../models");

Router.get('/workouts', (req,res)=>{
    console.log("WE HIT THE ROUTE")
    db.User.find()
})

module.exports = Router
