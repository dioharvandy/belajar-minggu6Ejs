const router = require('express').Router()

const carRouter = require("./car")
const studentRouter = require("./student")

router.use(studentRouter)

module.exports = router