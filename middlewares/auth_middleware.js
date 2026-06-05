import jwt, { decode } from 'jsonwebtoken'

export function middleware(req,res,next){
    const token=req.body.token
    try{
    const decoded=jwt.decode(token,process.env.JWT_SECRET)
    req.email=decoded.email
    next()
    }
    catch(err){
        res.send("Invalid Token"+err)
    }
}