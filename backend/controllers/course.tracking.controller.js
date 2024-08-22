export const completeCourse = async (req, res) => {
    try {
        const { courseId, userId } = req.body;

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        const userStatusIndex = course.userStatus.findIndex(
            (status) => status.user.toString() === userId
        );

        if (userStatusIndex === -1) {
            return res.status(400).json({ success: false, message: "User not enrolled in this course" });
        }

        course.userStatus[userStatusIndex].status = "Completed";

        await course.save();

        res.status(200).json({ success: true, message: "Course marked as completed", course });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: "Server error in completeCourse" });
    }
};
