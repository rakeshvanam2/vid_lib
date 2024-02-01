// App.js

import React, { useState } from "react";
import "./App.css";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import BookmarkList from "./BookmarkList";
import VideoUploader from "./VideoUploader"; // Import the new component

function App() {
  const [videos, setVideos] = useState([]);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const toggleBookmark = (video) => {
    if (bookmarkedVideos.includes(video)) {
      setBookmarkedVideos((prevBookmarked) =>
        prevBookmarked.filter((v) => v !== video),
      );
    } else {
      setBookmarkedVideos((prevBookmarked) => [...prevBookmarked, video]);
    }
  };

  const playVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const handleVideoUpload = (file) => {
    // Handle the uploaded video file (you might want to upload it to a server or store it in state)
    // For now, let's assume the file name as the video URL
    const videoURL = URL.createObjectURL(file);
    addVideo(videoURL);
  };
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="container">
      <div>
        <img
          src="https://images.thecompanycheck.com//companylogo/Samta_Infotech_Private_Limited_514806.webp"
          alt="Company Logo"
        />
        <h1> Movies Library</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search for videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="video-list">
        <h4>Movie List</h4>
        <VideoUploader onUpload={handleVideoUpload} />
        <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
      </div>
      <div className="video-player">
        <VideoPlayer selectedVideo={selectedVideo} closeVideo={closeVideo} />
      </div>
      <div className="bookmarked-videos">
        <BookmarkList
          bookmarkedVideos={bookmarkedVideos}
          toggleBookmark={toggleBookmark}
          playVideo={playVideo}
        />
      </div>
    </div>
  );
}
export default App;
