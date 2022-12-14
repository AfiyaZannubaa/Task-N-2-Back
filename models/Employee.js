const {Schema, model} = require('mongoose');

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // sparse:true
        
    },
    password: {
        type: String,
        required: true,
        
    }
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;
