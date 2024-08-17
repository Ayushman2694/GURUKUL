import mongoose from "mongoose";


const coursesSchema = mongoose.Schema({

    courseTitle :{
        type:String,
        required:true,

    },
    courseDescription :{
        type:String,
        required:true,
    },
    courseDepartment :{
        type:String,
        required:true,
    },
       
    
    thumbnail:{
        type:String,
        required:true,
    },
    
    noOfModules:{
        type:Number
    },
    
    userStatus:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            status:{
                type:String,
                default:"not started"
            }
        }
    ]
    
})

const Course = new mongoose.model("Course",coursesSchema);






export default Course;