const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course, PurchasedCourse } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    try{
        const {username, password} = req.body;
        const newUser = new User({username, password});
        await newUser.save();
        res.status(201).send({msg: "User created successfully"});
    }catch(err){
        res.status(500).send({msg: "Something went wrong"});
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Course.find();
        res.status(200).send(courses);
    }catch(err){
        res.status(500).send({msg: "Something went wrong"});
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    try{
        const {courseId} = req.params;
        const {username} = req.headers;
        const course = await Course.findById(courseId);
        const newPurchase = new PurchasedCourse({...course, ...username});
        await newPurchase.save();
        res.status(201).send({msg: "Course purchased successfully"})
    }catch(err){
        res.status(500).send({msg: "Something went wrong"});
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        const {username} = req.headers;
        const purchase = await PurchasedCourse.find({username});
        res.status(200).send({purchasedCourses: purchase});
    }catch(err){
        res.status(500).send({msg: "Something went wrong"});
    }
});

module.exports = router