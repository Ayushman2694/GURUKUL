import Employee from "../models/user.model.js";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '3d' });
}

export const login = async (req, res) => {
    try {
        const { empId, password } = req.body;
        const emp = await Employee.findOne({ empId });

        if (!emp) {
            return res.status(400).json({ error: "employee not found" });
        }

        if (password !== emp.password) {
            return res.status(400).json({ error: "invalid password" });
        }

        const token = createToken(emp._id);
        return res.status(200).json({
            success: true,
            token,
            empId: emp.empId,
            empName: emp.employeeName,
            department: emp.department,
            designation: emp.designation,
            joiningDate: emp.createdAt
        });

    } catch (error) {
        console.log("Error in login controller", error.message);
        return res.status(500).json({ error: "internal server error" });
    }
};

export const logout = async (req, res) => {
    try {
        return res.status(201).json({ message: "logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        return res.status(500).json({ error: "internal server error" });
    }
};

export const verifyToken = (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
        return res.status(200).json({ success: true, decoded });
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};
