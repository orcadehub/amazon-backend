import express from "express";
import User from "../models/user_model.js";
import jwt from 'jsonwebtoken'
import { middleware } from "../middlewares/auth_middleware.js";
const router=express.Router();

router.get('/mydetails',middleware,(req,res)=>{
    const email=req.email;
    const user=User.findOne({email:email}).then((user)=>{
        res.json(user);
    })
})

router.get('/generate/:email',(req,res)=>{
    const email=req.params.email
    const token=jwt.sign({email},process.env.JWT_SECRET)
    res.json({"token":token})
})

export default router;