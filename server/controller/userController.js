import User from '../models/userModel.js'
import JWT from 'jsonwebtoken'
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
    //validation for security
    //email regex
    // const regex = `$/[a-z][0-9]+@+gmail+/.+com`
    // if(!regex.match(password)){
    //     res.send({
    //         success:false,
    //         message:'You can only use gmail.com'
    //     })
    // }

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
    if (!valid) {
        return res.send({
            success: false,
            message: 'Your creditials didnot matched'
        })
    }

    //generate jwt token
    const token = JWT.sign(
        {
            userId: user._id
        },
        process.env.JWT_SECRETE,
        
    );

    res.json({
        success: true,
        message: 'Login successfull',
        token
    })
}