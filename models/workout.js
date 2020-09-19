const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
    required: "The Date must be a Date is Required"
  },
exercise: {
  type: Array,
  name: Array,
  Duration: Number,
  reps: Number,
  sets: Number
}
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;