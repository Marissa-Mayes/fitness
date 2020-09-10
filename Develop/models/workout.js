const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: "The Date must be a Date is Required"
  },

 exercises: [
   {
     type: {type: String},
name: String,
duration: Number,
weight: Number,
reps: Number,
sets: Number,
distance: Number
   }
 ]
},
{
  toObject: {
    virtuals: true
    },
    toJSON: {
    virtuals: true 
    }
});
WorkoutSchema.virtual('totalDuration').get(()=>{
  return 200
})
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;