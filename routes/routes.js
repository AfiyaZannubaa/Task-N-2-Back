const { register, login } = require("../controllers/employees");

async function Routes(app, opts){

    app.route({
        method: "POST",
        url: "/employee/register", 
        handler: register,
    });

    app.route({
        method: "POST",
        url: "/employee/login", 
        handler: login,
    });
}

module.exports = Routes;