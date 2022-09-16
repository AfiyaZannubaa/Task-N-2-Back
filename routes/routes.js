const employees = require("../controllers/employees");
const { register, login } = require("../controllers/employees");
const Employee = require("../models/Employee");
const Task = require('../controllers/Task')

async function Routes(fastify, opts){

    fastify.addHook("onRequest", async (request, reply) =>{
        try{
            console.log("test")
            await request.jwtVerify()
        }catch(err){
            reply.send(err);
        }
    })

    fastify.route({
        method: "POST",
        url: "/createTask",
        handler: Task.createTask,

    })

    fastify.route({
        method: "GET",
        url: "/tasks",
        handler: Task.fetchTask
    })

    fastify.route({
        method: "DELETE",
        url: "/tasks/delete/:id",
        handler: Task.deleteTask
    })

    fastify.route({
        method: "PUT",
        url: "/editTasks/:id",
        handler: Task.update
    })

   
}

module.exports = Routes;