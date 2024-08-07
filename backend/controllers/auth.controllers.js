
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
// import generateTokenandSetCookie from "../utils/generateToken.js";
const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET || 'default_secret',{expiresIn: '3d'})
}

export const login =async (req,res)=>{
    
    try {
        const {empId,password} =req.body;
        const emp = await User.findOne({empId});
            
        if(!emp){
            res.status(400).json({error:"employee not found"})
        }
        else{
            if(password === emp.password){
                res.status(200).json(
                    {
                    empId:emp.empId,
                    empName:emp.employeeName,
                    department:emp.department,
                    designation:emp.designation,
                    joiningDate:emp.createdAt
                })
                
            }
            else{
                res.status(400).json({error:"invalid password"})
            }

        }

        // generateTokenandSetCookie(user._id,res);
        const token = createToken(user._id);
        res.status(200).json({success:true,token})
       
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