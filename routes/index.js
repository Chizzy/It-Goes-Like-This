const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const searchListController = require('../controllers/searchListController')

// USER ROUTES
router.post('/api/user', userController.create)
router.get('/api/user/:id', userController.show)
router.patch('/api/user/:id', userController.update)
router.put('/api/user/:id', userController.update)
router.delete('/api/user/:id', userController.delete)

// SEARCHLIST ROUTES
router.get('/api/user/:id/searchList', searchListController.index)
router.post('/api/user/:id/searchList', searchListController.create)
router.get('/api/searchList/:id', searchListController.show)
router.patch('/api/searchList/:id', searchListController.update)
router.put('/api/searchList/:id', searchListController.update)
router.delete('/api/searchList/:id', searchListController.delete)

module.exports = router