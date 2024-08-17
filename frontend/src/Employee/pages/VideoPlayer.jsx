/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoLink }) => {
  return (
    <div className="video-wrapper">
      <ReactPlayer
        key={videoLink} // Add the key prop to force re-render on videoLink change
        url={videoLink}
        controls
        width="100%"
        height="auto"
        onError={(e) => console.error("Error loading video", e)}
      />
    </div>
  );
};

export default VideoPlayer;
