const Courses = require('../models/Courses'); // import model Course
const Account = require('../models/Accounts'); // import model Course
const jwt = require('jsonwebtoken'); // import jwt
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose')

class MeController {
    
    // [GET] /me/stored/courses
    storedCourses(req, res, next){
        Courses.find({})                     //lấy ra tất cả các khóa học
            .then( courses => res.render('me/storedCourses', {
                courses : multipleMongooseToObject(courses)
            }))
            .catch(next);    
    }
}

module.exports = new MeController();