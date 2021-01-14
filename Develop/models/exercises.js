const mongoose = request("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema(
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


);
const Exercises = mongoose.model("Exerises", exercisesSchema);

module.exports = Exercises;