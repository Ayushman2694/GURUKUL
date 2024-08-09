import jwt from "jsonwebtoken";
import Employee from "../models/user.model.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "default_secret", {
    expiresIn: "3d",
  });
};

export const login = async (req, res) => {
  try {
    const { empId, password } = req.body;
    const emp = await Employee.findOne({ empId });

    if (!emp) {
      return res.status(400).json({ error: "Employee not found" });
    }

    if (password !== emp.password) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = createToken(emp._id);
    return res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const verifyToken = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "default_secret"
    );
    return res.status(200).json({ success: true, decoded });
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export const getUserInfo = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "default_secret"
    );
    const userId = decoded.id;

    const user = await Employee.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};


export const createEmploye = async (req,res)=>{ const {employeeName,empId,designation,department,password,joiningDate} =req.body 
try{ console.log("Create Employe Body",req.body) 
if(!employeeName || !empId || !designation || !department || !password || !joiningDate){ console.log("Field Missing",{employeeName,empId,designation,department,password,joiningDate}); 
return res.status(400).json({ success: false, message: 'All fields are required' });
 }
 const exists = await Employee.findOne({ empId }); if (exists) { return res.status(400).json({ success: false, message: 'User already exists' }); } if (password.length < 8) { return res.status(400).json({ success: false, message: 'Please enter a strong password' }); } 
 const newEmployee = new Employee({ employeeName, empId, designation, department, password, joiningDate }) 
 await newEmployee.save() 
 res.status(201).json({ success: true,message:"Employee Created successfully" }); 
}
catch (error)
 { console.error(error); res.status(500).json({ success: false, message: error.message });
 } 
}