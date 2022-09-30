const Employee = require("../models/Employee");
const bcrypt = require('bcrypt');

module.exports = {
    register: async function (req,res){
        try{
            let payload = req.body;
            payload.password = await bcrypt.hash(payload.password, 10);
            // res.send(payload)

            // console.log(req.body)
            // res.send(req.params)

            const employee = new Employee(req.body);
            await employee.save();
            const {password, ...rest} = employee.toObject;

            res.status(200).send({message: "Employee Registration Is Successful", employee: rest});
            // res.send(employee);
        }catch(e){
            res.status(500).send(e)
        }
    },

    login: async function (req,res){
        try{
            const employee = await Employee.findOne({ email: req.body.email}).lean();
            
            if(employee){
                const check = await bcrypt.compare(req.body.password, employee.password);
                // console.log(check)
                if(check){
                    const {password, ...rest} = employee;

                    const token = await res.jwtSign({employee: rest})
                    console.log(token)
                    res.send({message: "Employee Login Is Successful", token: token });
                    
                }else{
                    res.status(401).send({message: "Invalid Password"});
                }
                
            }else{
                res.send(401)({message: "Employee Doesn't Exist!"})
            }
            res.send(employee);

        }catch(e){
            res.status(500).send(e)
        }
    }
}