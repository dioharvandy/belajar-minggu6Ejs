const router = require('express').Router()

const studentController = require('../controllers/studentController')

router.get('/student', studentController.get)
router.post('/student', studentController.create)
router.get('/student/:id', studentController.getById)
router.put('/student/:id', studentController.update)
router.delete('/student/:id', studentController.delete)

module.exports = router