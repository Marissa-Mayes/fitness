const db = require("../models");


module.exports= function(app) {

app.get("/api/workouts", (req,res)=>{
    console.log("WHERE AM I")
    db.Workout.find({}).then((workoutData)=>{
        //console.log(JSON.stringify(workoutData))
        res.json(workoutData)
    }).catch(err=>{console.error(err)})
})
app.post("/api/workouts", ({body},res)=>{
    console.log("WE HIT THE ROUTE")
    db.Workout.create(body)
        .then((data)=>{
        console.log(data)
        res.json(data);
    })
    .catch(err=>{console.error(err)
})
app.put("/api/workouts/:id", (req,res) =>{
const_id= req.params.id;
const body= req.body
    db.Workout.findByIdAndUpdate(
        {_id},
        {$push:
         {exercise: body}},
    )
    .then(data => res.json(data))
    .catch(err => {console.error(err)})
    });
})};

