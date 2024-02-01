import React from "react";

function VideoPlayer({ selectedVideo, closeVideo }) {
  return (
    <div className="video-player">
      <h4>Video Player</h4>
      {selectedVideo && (
        <div>
          <div className="video-iframe-container">
            <iframe
              title="Video Player"
              width="560"
              height="315"
              src={selectedVideo}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <button onClick={closeVideo}>Close Video</button>
        </div>
      )}
      {!selectedVideo && <p>Select a video to play</p>}
    </div>
  );
}

export default VideoPlayer;
