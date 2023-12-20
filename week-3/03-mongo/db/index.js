const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/hkirat_week3_03?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    image: String
});

const purchasedCourses = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    username: String
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
const PurchasedCourse = mongoose.model('purchaseCourse', purchasedCourses);

module.exports = {
    Admin,
    User,
    Course,
    PurchasedCourse
}