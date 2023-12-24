const express = require('express');
const router = express.Router();
const User = require('../models/usermodel.js');
const bcrypt = require('bcrypt');


// router.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;
//     const newUser = new User({ name, email, password });
//     try {
//         const user = await newUser.save();
//         res.send(user);
//     }
//     catch (error) {
//         return res.status(400).json({ message: error });
//     }
// });


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        // If the email is not registered, proceed with registration
        const newUser = new User({ name, email, password });
        const user = await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}); 

  

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try{
//         const user = await User.find({ email, password });
//         if(user.length > 0)
//         {
//             const currentUser = {
//                 name: user[0].name,
//                 email: user[0].email,
//                 isAdmin: user[0].isAdmin,
//                 _id: user[0]._id
//             }
//             res.send(currentUser)
            
//         }
//         else
//         {
//             return res.status(400).json({ message: "Invalid Credentials" });
//         }

//     }
//     catch(error)
//     {
//         return res.status(400).json({ message: error });
//     }
// });

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email, password });
//         if (user) {
//             // Store user information in the session
//             req.session.user = {
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 isAdmin: user.isAdmin,
//             };
//             res.send(req.session.user);
//         } else {
//             return res.status(400).json({ message: "Invalid Credentials" });
//         }
//     } catch (error) {
//         return res.status(400).json({ message: error.message });
//     }
// });

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        // Check if the user exists
        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        // Compare the entered password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            // Password is valid, proceed with login
            return res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        } else {
            // Password is not valid
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/logout', (req, res) => {
    // Clear session on logout
    req.session.destroy();
    res.send({ message: 'Logged out successfully' });
});

module.exports = router;












