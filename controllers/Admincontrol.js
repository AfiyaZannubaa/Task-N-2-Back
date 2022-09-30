const Admin = require("../models/Admin");
const bcrypt = require('bcrypt');

module.exports = {
    login: async function (req,res){
        try{
            const admin = await Admin.findOne({ email: req.body.email}).lean();
            
            if(admin){
                const check = await bcrypt.compare(req.body.password, admin.password);
                // console.log(check)
                if(check){
                    const {password, ...rest} = admin;

                    const token = await res.jwtSign({admin: rest})
                    console.log(token)
                    res.send({message: "Admin Login is Succesful", token: token });
                    
                }else{
                    res.status(401).send({message: "Invalid Password"});
                }
                
            }else{
                res.send(401)({message: "Admin can only access!"})
            }
            res.send(admin);

        }catch(e){
            res.status(500).send(e)
        }
    },

    register: async function (req,res){
        try{
            let payload = req.body;
            payload.password = await bcrypt.hash(payload.password, 10);

            const admin = new Admin(req.body);
            await admin.save();
            const {password, ...rest} = admin.toObject;

            res.status(200).send({message: "Admin Registration Is Successful", admin: rest});
            
        }catch(e){
            res.status(500).send(e)
        }
    }
}