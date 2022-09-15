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
        url: "/createTask",
        handler: Task.createTask,

    })

    fastify.route({
        method: "GET",
        url: "/tasks",
        handler: Task.fetchTask
    })

   
}

module.exports = Routes;