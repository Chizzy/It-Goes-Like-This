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
router.get('/api/user/:id/songs', songsController.index)
router.post('/api/user/:id/songs', songsController.create)
router.get('/api/songs/:id', songsController.show)
router.patch('/api/songs/:id', songsController.update)
router.put('/api/songs/:id', songsController.update)
router.delete('/api/songs/:id', songsController.delete)

// PLAYLIST ROUTES
router.post('/api/user/:id/playlist', playlistController.create)
router.get('/api/user/:id/playlist/:id', playlistController.show)
router.patch('/api/user/:id/playlist/:id', playlistController.update)
router.put('/api/user/:id/playlist/:id', playlistController.update)
router.delete('/api/user/:id/playlist/:id', playlistController.delete)

module.exports = router