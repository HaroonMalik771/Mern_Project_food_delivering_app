const express = require('express');
const router = express.Router();
const User = require('../models/usermodel.js');

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    try {
        const user = await newUser.save();
        res.send(user);
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.find({ email, password });
        if(user.length > 0)
        {
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            res.send(currentUser)
            
        }
        else
        {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

    }
    catch(error)
    {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;