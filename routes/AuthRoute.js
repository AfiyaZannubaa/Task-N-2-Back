const employees = require("../controllers/employees");
const { register, login } = require("../controllers/employees");
const Admincontrol = require("../controllers/Admincontrol");

async function AuthRoute(fastify, opts){

     //Admin routes-------------------------------------
     fastify.route({
        method: "POST",
        url: "/admin/login",
        handler: Admincontrol.login
    })

    fastify.route({
        method: "POST",
        url: "/admin/register",
        handler: Admincontrol.register
    })


    //---------------------------------------------------

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