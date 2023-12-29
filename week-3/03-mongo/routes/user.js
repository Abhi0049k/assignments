const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

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
        if(!course) return res.status(404).send({msg: "Course not found"});
        await User.updateOne({username}, {"$push":{purchasedCourses: courseId}});
        res.status(201).send({msg: "Course purchased successfully"})
    }catch(err){
        res.status(500).send({msg: "Something went wrong"});
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        const {username} = req.headers;
        const purchase = await User.findOne({username});
        const courses = await Course.find({
            _id: {
                "$in": purchase.purchasedCourses
            }
        })
        res.status(200).send({purchasedCourses: courses});
    }catch(err){
        res.status(500).send({msg: "Something went wrong"});
    }
});

module.exports = router