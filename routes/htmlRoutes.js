const path = require("path");

module.exports= function(app){
app.get("/", (req,res)=>{
    console.log("home")
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
app.get("/exercise",(req,res)=>{
    console.log("ITS THE EXERCISES")
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
})

app.get("/stats",(req,res)=>{
    console.log("test stats")
    res.sendFile(path.join(__dirname,"../public/stats.html"))
})
// app.get("/api/workouts/range",(req,res)=>{
//   console.log("exercise range")
// res.sendFile(path.join(__dirname,"../public/stats.html"))
}
