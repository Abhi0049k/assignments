const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { ADMIN_JWT_SECRET } = require("..");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    await Admin.create({ username, password });
    res.status(201).send({ msg: "Admin Created Successfully" });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const admin = await Admin.find({ username, password });
    if (admin) {
        const token = jwt.sign({ username }, ADMIN_JWT_SECRET);
        return res.status(200).send({ token });
    } else {
        res.status(411).send({ msg: "Wrong Credentials" })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;
    const newCourse = new Course({ title, description, price, image: imageLink });
    await newCourse.save();
    res.status(201).send({ message: 'Course created successfully', courseId: newCourse._id })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.status(200).send({ courses })
});

module.exports = router;