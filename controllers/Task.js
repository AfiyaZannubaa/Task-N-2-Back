const e = require("cors");
const Task = require("../models/Tasks");

module.exports = {
    update: async function (req,res) {
        try{
            const taske = await Task.findByIdAndUpdate(req.params.id,{
                task: req.body.task
            });
            await taske.save();
            res.status(200).send({message: "Task updatedsuccessfully"});
        }
    catch{
        res.status(500).send(e) 
     }
    },
    deleteTask: async function (req,res) {
        try{
            const task = await Task.findById(req.params.id);
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

createTask: async function(req,res){
    try{
        let payload = req.body;
        payload.userId = req.params.id;
        const task = new Task(payload);
        await task.save();
        res.status(200).send(task);
        
    //get the time input - set it as to be a number - use if else to set the limit and message.

    const timer = await Employee.findOne({ time: req.body.time});
    timer = Number(timer);
    if(timer){
        
        res.status(200).send({message: "Working hours exceeded!"});
    } else{
        res.status(404).send({message: "Working hours normal!"});
    }

  

            
        
    }catch(e){
        res.status(500).send(e)
    }
},

fetchTask: async function (req,res) {
    try{
        const task = await Task.find();
        res.status(200).send(task);

    }catch(e){
        res.status(500).send(e)
    }
},

};