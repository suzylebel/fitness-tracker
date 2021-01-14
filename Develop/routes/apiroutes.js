// dependencies
const router = require("express").Router();
const Workout = require("../models/workout.js");




router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("api/workouts/stats", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});


module.exports = router;
