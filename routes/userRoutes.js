const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')


router.route('/user').get(usersController.getUser)
router.use(verifyJWT)
router.route('/')
.post(usersController.createNewUser)
.get(usersController.getAllUsers)
.patch(usersController.updateUser)
.delete(usersController.deleteUser)

module.exports = router
