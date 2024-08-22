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
                type: String,
                required: true,
            },
            status: {
                type: Number,
                min:0,
                max:100,
                default: 0,
            },
        },
    ],
});

const Course = mongoose.model("Course", coursesSchema);

export default Course;
