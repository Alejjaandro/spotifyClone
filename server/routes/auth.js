// router is an express middleware to handle routes.
import { Router } from "express";
const router = Router();

import jwt from 'jsonwebtoken';

// We create the endpoints. 
// First we validate the form imputs data, then we make the pretition.
router.post("/register", async (req, res) => {
    // // Extract the info from the body.
    // const { username, email, password } = req.body;

    // // "try/catch" to avoid code interruption.
    // try {

    //     // Check if the email is already registered.
    //     const userFound = await User.findOne({ email })
    //     if (userFound) {
    //         return res.status(400).json({message: ['This email already exists']});
    //     }

    //     const newUser = new User({
    //         username,
    //         email,
    //         // Encripting the password received from body.
    //         password: await bcrypt.hash(password, 10),
    //     });
    //     // save new user in the DB.
    //     const savedUser = await newUser.save();

    //     // Create a security Token without the password.
    //     const { password: savedPassword, ...userWithoutPassword } = savedUser.toObject();
    //     const accessToken = jwt.sign(
    //         userWithoutPassword,
    //         process.env.JWT_KEY,
    //         { expiresIn: '1h' }
    //     );
        
    //     return res.status(200).json({ 
    //         message: ['Login successfull'], 
    //         user: userWithoutPassword, 
    //         token: accessToken 
    //     });

    // } catch (error) {
    //     return res.status(500).json(error.message);
    // }
});

router.post("/login", async (req, res) => {
    try {

        if(req.body.email !== "test@test.com") return res.status(401).json({ message: ["Wrong email"] })

        // We compare the password received from the body with the one in the database.
        // If doesn't match sends an error.
        const passwordMatch = (req.body.password === "12345678");

        if (!passwordMatch) return res.status(401).json({ message: ['Wrong password'] })

        // Create a security Token without the password.
        const user = {email: req.body.email, password: req.body.password}
        const accessToken = jwt.sign(
            user,
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ 
            message: ['Login successfull'], 
            user: user, 
            token: accessToken 
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

export default router;