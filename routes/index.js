const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const songsController = require('../controllers/songsController')
const playlistController = require('../controllers/playlistController')

// USER ROUTES
router.post('/api/user', userController.create)
router.get('/api/user/:id', userController.show)
router.patch('/api/user/:id', userController.update)
router.put('/api/user/:id', userController.update)
router.delete('/api/user/:id', userController.delete)

// SONGS ROUTES
router.index('/api/user/:id/songs', songsController.index)
router.post('/api/user/:id/songs', songsController.create)