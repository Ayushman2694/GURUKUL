import Course from "../models/course.model.js";
import Employee from "../models/user.model.js";

export const assignCourse = async(req,res)=>{
    try{
        const {empId , courseId}= req.params;
        console.log("employeeid ",empId, "Received courseId:", courseId)

        const employee = await Employee.findOne({empId})
        if(!employee){
            return res.status(400).json({ message: "Employee not found" });

        }

        const course = await Course.findById(courseId);
        if (!course) {
          return res.status(400).json({ message: "Course not found" });
        }

        if(!employee.courses.includes(courseId)){
            employee.courses.push(courseId)
            await employee.save()
        }
        else {
            return res.status(400).json({ message: "Course already assigned to the employee" });
          }



    }catch(error){
        console.log(error)

    }

}