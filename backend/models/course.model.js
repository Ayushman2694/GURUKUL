import mongoose from "mongoose";

const coursesSchema = mongoose.Schema({
    courseTitle: {
        type: String,
        required: true,
    },
    courseDescription: {
        type: String,
        required: true,
    },
    courseDepartment: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    noOfModules: {
        type: Number,
    },
    userStatus: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            status: {
                type: String,
                enum: ["not started", "On Going", "Completed"],
                default: "not started",
            },
        },
    ],
});

const Course = mongoose.model("Course", coursesSchema);

export default Course;
