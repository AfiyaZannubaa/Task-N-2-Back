const mongoose = require('mongoose')

const{Schema, model} = mongoose

const TaskSchema = new Schema({
    
    
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },

    date:{
        type: Date,
        required: true

    },

    department: {
        type: String,
        required: true

    },

    task: {
        type: String,
        required: true
    },
    
    time: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        // default: 'created',
        required: true
    },


});

const Task = model("Task", TaskSchema);

module.exports = Task;