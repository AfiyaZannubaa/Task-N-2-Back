const employees = require("../controllers/employees");
const { register, login } = require("../controllers/employees");
const Employee = require("../models/Employee");
const Task = require('../controllers/Task')

async function AuthRoute(fastify, opts){

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

    

   
}

module.exports = AuthRoute;