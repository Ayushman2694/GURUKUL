import csv from "csvtojson";
import Employee from "../models/user.model.js"; // Adjust the path as needed

export const multipleEmployeeUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;
    const jsonArray = await csv().fromFile(filePath);

    const results = [];
    for (const data of jsonArray) {
      try {
        const existingEmployee = await Employee.findOne({ empId: data.empId });

        if (existingEmployee) {
          await Employee.updateOne({ empId: data.empId }, data);
        } else {
          await Employee.create(data);
        }
        results.push(data);
      } catch (err) {
        console.error("Error processing employee:", err.message);
      }
    }

    return res
      .status(200)
      .json({ message: "Successfully processed employees", results });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ error: "Error in multipleEmployeeUpload controller" });
  }
};
