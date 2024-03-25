const express = require('express')
const router = express.Router()

const { 
    listAllUser,
    listSingleUser,
    createUser,
    editUser,
    removeUser,
    
} = require('../controllers/user')

//  http://localhost:5000/test/user
router.get('/user', listAllUser)
router.get('/user/:id', listSingleUser)
router.post('/user', createUser)
router.put('/user/:id', editUser)
router.delete('/user/:id', removeUser)

module.exports = router;