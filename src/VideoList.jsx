// VideoList.js

import React from "react";

function VideoList({ videos, addVideo, setSelectedVideo }) {
  const handleAddVideo = () => {
    const videoUrl = prompt("Enter the video URL:");
    if (videoUrl) {
      addVideo(videoUrl);
    }
  };

  return (
    <div>
      <ul>
        {videos.map((video, index) => (
          <li key={index} onClick={() => setSelectedVideo(video)}>
            {video}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
