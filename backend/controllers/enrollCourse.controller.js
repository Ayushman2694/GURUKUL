import Course from "../models/course.model.js";
import Employee from "../models/user.model.js";

export const assignCourse = async (req, res) => {
  try {
    const { empId, courseId } = req.body;
    console.log("Employee ID:", empId, "Received course ID:", courseId);

    const employee = await Employee.findOne({ empId });
    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(400).json({ message: "Course not found" });
    }

    if (!employee.courses.includes(courseId)) {
      employee.courses.push(courseId);
      await employee.save();
      return res.status(200).json({ message: "Course assigned successfully" });
    } else {
      return res.status(400).json({ message: "Course already assigned to the employee" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while assigning the course" });
  }
};




export const excludingDepartment = async (req, res) => {
  try {
    const { departmentName , all_department } = req.params;

    if (!departmentName) {
      return res.status(400).json({ message: "Department name is required" });
    }

    const courses = await Course.find({
      courseDepartment: { $ne: departmentName && "all_department" }
    });

    if (!courses.length) {
      return res.status(400).json({ message: "No courses found excluding the specified department" });
    }

    res.status(200).json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
