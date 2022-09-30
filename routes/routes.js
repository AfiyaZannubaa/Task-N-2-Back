const employees = require("../controllers/employees");
const { register, login } = require("../controllers/employees");
const Employee = require("../models/Employee");
const Task = require('../controllers/Task');
const Admincontrol = require("../controllers/Admincontrol");
const EmployeeList = require("../controllers/EmployeeLists")


async function Routes(fastify, opts){

    fastify.addHook("onRequest", async (request, reply) =>{
        try{
            console.log("test")
            await request.jwtVerify()
        }catch(err){
            reply.send(err);
        }
    })

    //Admin routes----------------------------------------------------------------------------
    fastify.route({
        method:"GET",
        url: "/admin/employeelist",
        handler: EmployeeList.fetchEmployee
    })

    fastify.route({
        method: "POST",
        url: "/admin/createTask",
        handler: EmployeeList.createEmployeeTask,

    })

    fastify.route({
        method: "DELETE",
        url: "/admin/delete/:id",
        handler: EmployeeList.deleteTaske,
    })

    fastify.route({
        method: "PUT",
        url: "/admin/edit/:id",
        handler: Task.update
    })


    //----------------------------------------------------------------------------------------

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