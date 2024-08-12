import Course from "../models/course.model.js";

const addCourse = async (req, res) => {
  try {
    // Log the req.file to check if file is being uploaded
    console.log(req.file);

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    let thumbnail_filename = req.file.filename;

    const course = new Course({
      courseTitle: req.body.courseTitle,
      courseDescription: req.body.courseDescription,
      courseDepartment: req.body.courseDepartment,
      thumbnail: thumbnail_filename,
    });

    await course.save();
    res.json({ success: true, message: "Course added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export default addCourse;
