import mongoose from "mongoose";


const videosSchema = mongoose.Schema({

    videoTitle :{
        type:String,
        required:true,

    },
   videoDescription :{
        type:String,
        required:true,
    },
    videoLink:{
        type:String,
        required:true,
    }
    
})

const Video = new mongoose.model("Video",videosSchema);

export default Video;