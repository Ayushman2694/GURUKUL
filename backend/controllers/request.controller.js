import Request from "../models/request.model.js"; 
import Employee from "../models/user.model.js"; 
import Course from "../models/course.model.js"; 

// Controller to add a new request
export const addRequest = async (req, res) => {
  try {
    const { empId, courseId } = req.body;

    if (!empId || !courseId) {
      return res.status(400).json({ message: "empId and courseId are required" });
    }

    const employee = await Employee.findOne({ empId });
    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(400).json({ message: "Course not found" });
    }

    const newRequest = new Request({
      empId: employee.empId,
      employeeName: employee.employeeName,
      courseId: course._id,
      courseTitle: course.courseTitle,
    });

    await newRequest.save();

    res.status(200).json({ message: "Request created successfully", data: newRequest });
  } catch (error) {
    console.error("Error adding request:", error.message); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
