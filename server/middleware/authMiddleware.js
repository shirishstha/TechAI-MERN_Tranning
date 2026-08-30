import JWT from 'jsonwebtoken'
export const authValidation = (req, res, next)=> {
    try {

        const authHeader = req.headers.authorization;
        if(!authHeader){
            res.send({
                success:false,
                message:'Authorization required'
            })
        }

        const token = authHeader.split(" ")[1];
        const decoded = JWT.verify(token, process.env.JWT_SECRETE);
        req.user = decoded;
        next();
        
    } catch (error) {
        console.log(error);
        res.send({
            success:false,
            message:'Authorization failed'
        })
    }
}

