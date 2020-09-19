const express = require('express')
const Router = express.Router()
const db = require("../models");

Router.get('/workouts', (req,res)=>{
    console.log("WE HIT THE ROUTE")
    db.Workout.find({}).then((sponse)=>{
        console.log(sponse)
        res.json(sponse)
    }).catch(err=>{console.error(err)})
})
Router.post('/workouts', (req,res)=>{
    console.log("WE HIT THE ROUTE")
    db.Workout.create({...req.body}).then((sponse)=>{
        console.log(sponse)
        res.json(sponse)
    }).catch(err=>{console.error(err)})
})
Router.put("/workouts/:id", ({
body,params}, res) =>{
    db.Workout.findByIdAndUpdate(params.id,
        {$push: {exercise: body}},
        {new: true, runValidators: true}
    )
    .then(data => res.json(data))
    .catch(err => {console.error(err)})
    });

module.exports = Router
