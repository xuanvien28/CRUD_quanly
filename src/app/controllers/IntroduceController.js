const Courses = require('../models/Courses'); // import model Course
const Account = require('../models/Accounts'); // import model Course
const jwt = require('jsonwebtoken'); // import jwt
const {mongooseToObject} = require('../../util/mongoose')

class IntroduceController {
    // [GET] /introduce/:slug
    async show(req, res, next){ 
        Courses.findOne({slug : req.params.slug})   // key : value
            .then(course =>{
                // res.json(course)
                res.render('courses/show', {course : mongooseToObject(course) } )  // truyển dữ liệu vào {course} để đưa dữ liệu vào view
            })
            .catch(next);
    }

    // [GET] /introduce/create
    create(req, res, next){
        res.render('courses/create');
    }

    // [POST] /introduce/create
    store(req, res, next){
        const formData = req.body; // lấy dữ liệu từ form gửi lên
        formData.image = `https://img.youtube.com/vi/${formData.video}/sddefault.jpg`; // lấy ảnh từ video youtube
        
        //res.json(req.body); // lấy dữ liệu từ form gửi lên
        const course = new Courses(formData); // tạo mới một đối tượng Course từ dữ liệu gửi lên
        course.save() // lưu đối tượng Course vào cơ sở dữ liệu là promise
            .then( () => res.redirect('/'))
            .catch(next);
    }

    // [GET] /introduce/:id/edit
    edit(req, res, next){
        Courses.findById(req.params.id)
            .then(course =>  {
                res.render('courses/edit',
                {course : mongooseToObject(course) })})// truyền dữ liệu vào view
            .catch(next);
    }

    // [PUT] /introduce/:id
    update(req, res, next){
        Courses.updateOne({ _id:  req.params.id}, req.body)
            .then(course => res.redirect('/me/stored/courses')) // chuyển hướng về trang danh sách khóa học
            .catch(next);
        }

    // [DELETE] /introduce/:id
    destroy(req, res, next){
        Courses.deleteOne({ _id: req.params.id}) // xóa khóa học theo id
            .then(() => res.redirect('/me/stored/courses')) 
            .catch(next);
    }
}

module.exports = new IntroduceController();