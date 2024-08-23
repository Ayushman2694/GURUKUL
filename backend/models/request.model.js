import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    empId: {
      type: String,
      required: true,
      ref: "Employee",
    },
    employeeName: {
      type: String,
      required: true,
      ref: "Employee",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Course",
    },
    courseTitle: {
      type: String,
      required: true,
      ref: "Course",
    },
   
  },
);

const Request = mongoose.model("Request", requestSchema);

export default Request;
