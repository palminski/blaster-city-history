const { AuthenticationError } = require('apollo-server-express');
const {User} = require('../models');
const {signToken} = require('../utils/auth.js');

const resolvers = {
    Query: {
        users: async() => {
            return User.find()
        },
        currentUser: async(parent,args, context) => {
            console.log('Searching for current user');
            if(context.user){
                console.log(`current user ID ${context.user._id}`)
                const userData = await User.findOne({_id: context.user._id});
                console.log(`user data ${userData}`)
                return userData;
            }
            throw new AuthenticationError('Not Logged In');
        },
    },
    Mutation: {
        addWorkout: async(parent, {name}, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$push: {workouts: {name:name}}},
                    {new:true, runValidators:true}
                );
                console.log(updatedUser)
                return updatedUser;
            }
            throw new AuthenticationError('Must be logged in to perform this action');
        },
        addExercise: async(parent, {workoutId, name, reps, sets, weight}, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id, "workouts._id":workoutId},
                    {$push: {"workouts.$.exercises": {name:name,  sets:sets, reps:reps, weight:weight}}},
                    {new:true, runValidators:true}
                );
                console.log(updatedUser);
                return updatedUser;
                
            }
            throw new AuthenticationError('Must be logged in to perform this action');
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        loginUser: async (parent, {username, password}) => {
            const user = await User.findOne({username});
            if (!user) {
                throw new AuthenticationError('User not found');
            }
            const correctPassword = await user.passwordCheck(password);
            if (!correctPassword) {
                throw new AuthenticationError('Password Incorrect');
            }
            const token = signToken(user);
            return{token,user}
        }
    }
};

module.exports = resolvers