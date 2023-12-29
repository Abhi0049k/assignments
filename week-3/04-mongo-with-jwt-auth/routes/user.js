const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { USER_JWT_SECRET } = require("..");
const jwt = require('jsonwebtoken');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send({ msg: "User created successfully" });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const user = await User.find({ username, password });
    if (user) {
        const token = jwt.sign({ username }, USER_JWT_SECRET);
        return res.status(200).send({ token });
    } else {
        res.status(411).send({ msg: "Wrong Credentials" })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.status(200).send(courses);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const { courseId } = req.params;
    const { username } = req.headers;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).send({ msg: "Course not found" });
    await User.updateOne({ username }, { "$push": { purchasedCourses: courseId } });
    res.status(201).send({ msg: "Course purchased successfully" })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const { username } = req.headers;
    const purchase = await User.findOne({ username });
    const courses = await Course.find({
        _id: {
            "$in": purchase.purchasedCourses
        }
    })
    res.status(200).send({ purchasedCourses: courses });
});

module.exports = router