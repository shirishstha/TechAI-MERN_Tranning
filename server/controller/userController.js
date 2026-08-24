import User from '../models/userModel.js'
import { hashPassword } from '../utils/hash.js';
import bcrypt from 'bcrypt'

export const createUser = async (req, res) => {
    //code to register or create user
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
        res.json({
            success: false,
            message: 'All fields must be filled properly'
        })
    }


    //hash user password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
        email:email,
        password:hashedPassword,
        username:username
    })


    if (!user) {
        res.json({
            success: false,
            message: 'Couldnot register the user.'
        })
    }

    res.json({
        success: true,
        message: 'User registered successfully'
    })
}

export const getUser = (req, res) => {
    //code to fetch user details form db and compare id password
    res.json({
        success: true,
        message: 'User details fetched successfully'
    })
}