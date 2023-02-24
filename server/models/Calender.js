const {Schema} = require('mongoose');
const workoutSchema = require('./Workout.js')

const calenderSchema = new Schema(
    {
        monday: workoutSchema,
        tuesday: workoutSchema,
        wednesday: workoutSchema,
        thursday: workoutSchema,
        friday: workoutSchema,
        saturday: workoutSchema,
        sunday: workoutSchema,
    }
)

module.exports = calenderSchema;