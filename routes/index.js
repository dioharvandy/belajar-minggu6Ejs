const router = require('express').Router()

const carRouter = require("./car")
const studentRouter = require("./student")
const userRouter = require("./user")

router.use(userRouter)

const { authenticate } = require('../middlewares/auth')

router.use(authenticate)

router.use(studentRouter)
router.use(carRouter)


module.exports = router