const { comparePassword } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")
const {users} = require("../models")


class userController{
    static async register(req,res){
        try{

            const payload = {
                username: req.body.username,
                password: req.body.password
            }

            const result = await users.create(payload)

            const response = {
                id: result.id,
                username: result.username
            }

            return res.status(201).json(response)

        }catch(error){

            return res.status(500).json({
                message: error
            })

        }
    }
    static async login(req,res){
        try{
            const payload = {
                username: req.body.username,
                password: req.body.password
            }

            const result = await users.findOne({
                where:{
                    username : payload.username
                }
            }) 

            if(!result){
                return res.status(401).json({
                    message: "Invalid username/password"
                })
            }

            const match = comparePassword(payload.password, result.password)

            if(match){
                const opt = {
                    id: result.id,
                    username: result.username
                }
                const accessToken = generateToken(opt)

                return res.status(201).json({
                    accessToken
                })
            }else{
                return res.status(401).json({
                    message: "Invalid username/password"
                })
            }
        }catch(error){
            return res.status(500).json({
                message: error
            })
        }
    }
}

module.exports = userController