const {students} = require("../models")

class studentController{
    static async get(req, res){
        try {
            const response = await students.findAll()
            return res.status(200).json(response)

        } catch (error) {
            return res.status(500).json(response)
        }
    }
    static async create(req, res){
        try {
            let payload = {
                name: req.body.name,
                born_date: req.body.born_date,
                born_place: req.body.born_place,
                email: req.body.email,
                family_order: +req.body.family_order
            }
            const response = await students.create(payload)
            return res.status(201).json(response) 

        } catch (error) {
            return res.status(500).json(response)
        }
    }
    static async getById(req, res){
        try {
            const id = +req.params.id
            const response = await students.findAll({
                where:{
                    id
                }
            })
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(response)
        }
    }
    static async update(req, res){
        try {
            const id = +req.params.id
            let payload = {
                name: req.body.name,
                born_date: req.body.born_date,
                born_place: req.body.born_place,
                email: req.body.email,
                family_order: +req.body.family_order
            }
            const response = await students.update(payload,{
                where:{
                    id
                }
            })
            return res.status(201).json({
                response,
                message : "Update Success"
            })
        } catch (error) {
            return res.status(500).json(response)
        }
    }
    static async delete(req, res){
        try {
            const id = +req.params.id
            
            const response = await students.destroy({
                where:{
                    id
                }
            })
            return res.status(200).json({
                response,
                message : "Delete Success"
            })
        } catch (error) {
            return res.status(500).json(response)
        }
    }
}

module.exports = studentController