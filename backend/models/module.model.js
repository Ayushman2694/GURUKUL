import mongoose from "mongoose";

const modulesSchema = mongoose.Schema({
    moduleName:{
        type:String,
        required:true
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true
    },
    videoId:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video",
        required:true
        }
    ]
})

const Module =new mongoose.model("Module",modulesSchema);

export default Module;