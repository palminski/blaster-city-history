const {Schema} = require('mongoose');
const workoutSchema = require('./Workout.js')

const calenderSchema = new Schema(
    {
        monday: {
            type: String,
            
            unique: false,
        },
        tuesday: {
            type: String,
            
            unique: false,
        },
        wednesday: {
            type: String,
            
            unique: false,
        },
        thursday: {
            type: String,
            
            unique: false,
        },
        friday: {
            type: String,
            
            unique: false,
        },
        saturday: {
            type: String,
            
            unique: false,
        },
        sunday: {
            type: String,
            
            unique: false,
        },
    }
)

module.exports = calenderSchema;