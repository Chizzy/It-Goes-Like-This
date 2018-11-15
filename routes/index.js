const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const songsController = require('../controllers/songsController')
const playlistController = require('../controllers/playlistController')

// USER ROUTES
router.post('/api/user', userController.create)
router.get('/api/user/:id', userController.show)