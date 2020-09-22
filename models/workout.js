const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
exercise: {
  type: Array,
  default: [],
}
//viturals used to store workout duration combined//
}, { toJSON: { virtuals: true } });

WorkoutSchema.virtual("totalDuration").get(function(){
  console.log("WHERE WILL THIS SHOW UP?",this.exercise)
  let totes= this.exercise.reduce((accum, current)=>{return accum+current.duration}, 0)
  console.log(totes)
  return totes
})
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;