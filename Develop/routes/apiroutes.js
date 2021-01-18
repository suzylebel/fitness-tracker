// dependencies
const router = require("express").Router();
const Workout = require("../models/workout.js");



router.get("/api/workouts", (req, res) => {
    // aggregate for workouts get
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: ["$exercise.duration"]
                }
            }
        }
    ])
        //     db.Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


// post method with createrouter.post("/api/workouts", ({ body }, res) => {
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            // can add status error here too
            res.json(err);
        });
});


// 1 put (udate edit del)

router.put("/api/workouts/:id", (req, res) => {
    const workoutID = req.params.id;
    // see example activity 15
    Workout.findOneAndUpdate({ _id: workoutID }, { $push: { exercises: req.body } }, { new: true })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            // can add status error here too
            res.json(err);
        });
    });

 
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: ["$exercises.duration"]
                }
            }
        }
    ]
    )
    .sort({ day: "desc" })
    .limit(7)
    .sort({ day: "asc" })

        // agggregation goes here too ?
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            // can add status error here too
            res.json(err);
        });
});   
//  1 delete or range aggrgation.
// router.get("/api/workouts/range", (req, res) => {
//         Workout.aggregate([
//             {
//                 $addFields: {
//                     totalDuration: {
//                         $sum: ["$exercise.duration"]
//                     }
//                 }
//             }
//         ]
//         )
//         .sort({ day: "desc" })
//         .limit(7)
//         .sort({ day: "asc" })

//             // agggregation goes here too ?
//             .then(dbWorkout => {
//                 res.json(dbWorkout);
//             })
//             .catch((err) => {
//                 // can add status error here too
//                 res.json(err);
//             });
// }):
    

module.exports = router;
