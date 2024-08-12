import Employee from "../models/user.model.js";

export const showAllEmployee = async (req,res)=>{
    try {
        const allEmployee = await Employee.find({})
        const employeeDetails = allEmployee.map(emp => ({
            empId: emp.empId,
            employeeName: emp.employeeName,
            department:emp.department,
            designation:emp.designation,
            joiningDate:emp.joiningDate,
            password:emp.password

        }));
        return res.status(200).json(employeeDetails)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: "error in showAllEmployee Controller" });
    }
}

export const deleteEmployee = async (req,res)=>{
    try {
        const {empId} = req.body;
        await Employee.deleteOne({empId})
        return res.status(200).json({message:"Deleted Successfully"})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: "error in deleteEmployee Controller" });
    }

}