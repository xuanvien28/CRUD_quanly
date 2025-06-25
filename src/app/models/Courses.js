const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');


mongoose.plugin(slug);
const Course = new Schema({
  name: {  type: String, maxLength: 255 ,required: true }, // Tên khóa học- required bắt buộc
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  video: { type: String, maxLength: 255 },
  level: { type: String, maxLength: 255 }, // Cấp độ khóa học
  slug: { type: String, slug:'name', unique: true }, // Tạo slug tự động từ trường name, unique đảm bảo không trùng lặp
}, {
  timestamps: true, // Tự động thêm trường createdAt và updatedAt
});

module.exports = mongoose.model('Course', Course); //đặt tên là Course
