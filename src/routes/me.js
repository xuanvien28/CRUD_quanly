const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
const Middlewares = require('../app/middlewares/Middlewares');

router.get('/stored/courses', meController.storedCourses);



module.exports = router;