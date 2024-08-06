
import User from "../models/user.model.js";
// import generateTokenandSetCookie from "../utils/generateToken.js";

export const login =async (req,res)=>{
    
    try {
        const {userName,password} =req.body;
        const user = await User.findOne({userName});
            
        if(!user){
            res.status(400).json({error:"user not found"})
        }
        else{
            if(password === user.password){
                res.status(200).json({message:"logged in"})
            }
            else{
                res.status(400).json({error:"invalid password"})
            }

        }

        // generateTokenandSetCookie(user._id,res);
       
    } catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error:"internal server error"});
    }
};

export const logout=async (req,res)=>{ 
    try {
        // res.cookie("jwt","",{
        //     maxAge:0
        // })
        res.status(201).json({message:"logged out succesfully"})
    } catch (error) {
        console.log("Error in logout controller",error.message);
        res.status(500).json({error:"internal server error"});
    }
};