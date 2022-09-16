const employees = require("../controllers/employees");
const { register, login } = require("../controllers/employees");
const Employee = require("../models/Employee");
const Task = require('../controllers/Task')

async function Routes(fastify, opts){

    fastify.route({
        method: "POST",
        url: "/employee/register",
        handler: employees.register
    })

    fastify.route({
        method: "POST",
        url: "/employee/login",
        handler: employees.login
    })

    fastify.route({
        method: "POST",
        url: "/createTask/:id",
        handler: Task.createTask,

    })

    fastify.route({
        method: "GET",
        url: "/tasks/:id",
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