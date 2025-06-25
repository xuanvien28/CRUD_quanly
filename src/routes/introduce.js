const express = require('express');
const router = express.Router();

const introduceController = require('../app/controllers/IntroduceController');
const Middlewares = require('../app/middlewares/Middlewares');

router.get('/create', introduceController.create)
router.get('/:slug', introduceController.show)
router.post('/store', introduceController.store)

router.get('/:id/edit', introduceController.edit)
router.put('/:id', introduceController.update)  //sửa thông tin
router.delete('/:id', introduceController.destroy)   // xóa thông tin




module.exports = router;