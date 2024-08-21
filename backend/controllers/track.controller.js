
import Video from "../models/video.model.js";

export const videoTracker = async(req,res)=>{
try {
        const {videoId,empId}=req.body;
        if (!videoId || !empId) {
            return res.status(400).json({ error: "videoId and empId are required" });
        }
        
        const video = await Video.findById(videoId);
        
        if(!video){
            return res.status(400).json({error:"video not found"})    
        }

        if (video.watchedBy.includes(empId)) {
            return res.status(200).json({ message: "User has already watched this video"});
        }
        video.watchedBy.push(empId)
        await video.save()

        return res.status(200).json({message:"updated succesfully",video})
        

} catch (error) {
    console.log(error.message)
    return res.status(500).json({error:"error in videoTracker controller"})
}
}


