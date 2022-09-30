const e = require("cors");
const List = require("../models/EmployeeList")

module.exports = {
    fetchEmployee: async function (req,res) {
        try{
            const employeelist = await List.find();
            res.status(200).send(employeelist);

        }catch(e){
            res.status(500).send(e)
        }
    },
    createEmployeeTask: async function(req,res){
        try{
            let payload = req.body;
            payload.userId = req.user.employee._id
            const task = new List(payload);
            await task.save();
            res.status(200).send(task);
       
        }catch(e){
            res.status(500).send(e)
        }
    },

    deleteTaske: async function (req,res) {
        try{
            const task = await List.findById(req.params.id);
            if(task){
                await task.remove();
                res.status(200).send({message: "Task is deleted"});
            } else{
                res.status(404).send({message: "Task doesn't exist"});
            }

        }catch{
           res.status(500).send(e) 
        }
    },

    update: async function (req,res) {
        try{
            const taske = await List.findByIdAndUpdate(req.params.id,{
                task: req.body.task
            });
            await taske.save();
            res.status(200).send({message: "Task updatedsuccessfully"});
        }
    catch{
        res.status(500).send(e) 
     }
    },
}