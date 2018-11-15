const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const songsController = require('../controllers/songsController')
const playlistController = require('../controllers/playlistController')

// USER ROUTES
router.get('/api/user', userController.index)