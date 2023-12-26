const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try{
        const {username, password} = req.body;
        const newAdmin = new User({username, password});
        await newAdmin.save();
        res.status(201).send({message: "Admin created successfully"});
    }catch(err){
        res.status(500).send({err: "Something went wrong"})
    }

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    try{
        const {title, description, price, imageLink} = req.body;
        const newCourse = new Course({title, description, price, image: imageLink});
        await newCourse.save();
        res.status(201).send({message: 'Course created successfully', courseId: newCourse._id})
    }catch(err){
        res.status(500).send({msg: "Something went wrong"});
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        const courses = await Course.find();
        res.status(200).send({courses})
    }catch(err){
        res.status(500).send({msg: "Something went wrong"});
    }
});

module.exports = router;