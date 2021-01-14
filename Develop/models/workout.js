const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            totalDuration: {
                type: Number
                // add required for all
            },
            numExercises: {
                type: Number
            },
            totalWeight: {
                type: Number
            },
            totalSets: {
                type: Number
            },
            totalReps: {
                type: Number
            },
            totalDistance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;