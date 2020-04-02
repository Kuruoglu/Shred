const express = require('express');
const userController = require('../controllers/userController');
const eventController = require('../controllers/eventController');
const {hashPassword} = require('../middlewares/hashPassword');
const {checkJwt} = require('../middlewares/jwtMiddleware');

const router = express.Router();

router.post('/user', hashPassword,  userController.createUser);
router.get('/user', userController.getAllUser);
router.post('/login', userController.login);

router.post('/event', eventController.createEvent);
router.get('/event', eventController.getEventByDate);
// router.get('/event', eventController.getAllEvents);

module.exports = router;