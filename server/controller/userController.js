import User from '../models/userModel.js'
import { hashPassword } from '../utils/hash.js';
import bcrypt from 'bcrypt'

export const createUser = async (req, res) => {
    //code to register or create user
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
       return res.send({
            success: false,
            message: 'All fields must be filled properly'
        })
    }

    const existingUser = await User.find({ email });
    if (existingUser) {
        return res.send({
            success: false,
            message: 'User already exists.'
        })
    }

    //hash user password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
        email: email,
        password: hashedPassword,
        username: username
    })


    if (!user) {
       return res.send({
            success: false,
            message: 'Couldnot register the user.'
        })
    }

    return res.send({
        success: true,
        message: 'User registered successfully'
    })
}

export const getUser = async (req, res) => {
    //code to fetch user details form db and compare id password
    const { email, password } = req.body;

    //validate empty fields
    if (!email || !password) {
        return res.json({
            success: false,
            message: 'Both email and password should be provided'
        })
    }

    //validate if user exists or not
    const user = await User.findOne({ email });
    if (!user) {
       return res.json({
            success: false,
            message: 'There is no user registered with this email'
        })
    }

    //validate if password match with email or not
    const valid = await bcrypt.compare(password, user.password);
    if(!valid){
        return res.send({
            success:false,
            message:'Your creditials didnot matched'
        })
    }

    res.json({
        success: true,
        message: 'Login successfull'
    })
}