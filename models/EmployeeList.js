const mongoose = require('mongoose')

const{Schema, model} = mongoose

const ListSchema = new Schema({
    
    
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    AssignedDate:{
        type: Date,
        required: true

    },
    EmployeeName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        sparse:true
        
    },
    department: {
        type: String,
        required: true

    },
    task: {
        type: String,
        required: true
    },
    DueDate:{
        type: Date,
        required: true

    }

    

});

const List = model("List", ListSchema);

module.exports = List;