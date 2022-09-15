const mongoose = require('mongoose')

const{Schema, model} = mongoose

const TaskSchema = new Schema({
    
    
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },

    Department: {
        type: String,
        required: true

    },

    Tasks: [String],
    
    timeTaken: {
        type: Number,
        required: true
    },

    taskStatus: {
        type: String,
        default: 'created',
        required: true
    },


});

const Task = model("Task", TaskSchema);

module.exports = Task;