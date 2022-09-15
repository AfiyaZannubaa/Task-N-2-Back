const e = require("cors");
const Task = require("../models/Tasks");

module.exports = {

createTask: async function(req,res){
    try{
        let payload = req.body;
        payload.userId = req.params.id;
        const task = new Task(payload);
        await task.save();
        res.status(200).send(task);
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