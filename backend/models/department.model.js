import mongoose from "mongoose";



const departmentSchema = mongoose.Schema({

    department:{
        type:String,
        required:true,

    },
    
})



const Department = new mongoose.model("Department",departmentSchema)


export default Department;