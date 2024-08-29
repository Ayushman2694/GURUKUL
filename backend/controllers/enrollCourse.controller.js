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
      return res
        .status(400)
        .json({ message: "Course already assigned to the employee" });
    }
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ message: "An error occurred while assigning the course" });
  }
};

export const excludingDepartment = async (req, res) => {
  try {
    const { empId } = req.params;

    // Find the employee by empId
    const employee = await Employee.findOne({ empId });
    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }

  const departmentName=employee.department

    // Find courses that the employee has not enrolled in and that do not belong to the employee's department or "all_department"
    const courses = await Course.find({
      _id: { $nin: employee.courses },
      courseDepartment: { $nin: [departmentName, "all_department"] }, // Corrected the query using $nin
    });

    return res.status(200).json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

