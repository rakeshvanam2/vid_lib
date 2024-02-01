// BookmarkList.js

import React from "react";

function BookmarkList({ bookmarkedVideos, toggleBookmark, playVideo }) {
  return (
    <div>
      <h4>Bookmarked Videos</h4>
      <ul>
        {bookmarkedVideos.map((video, index) => (
          <li key={index}>
            <span onClick={() => playVideo(video)}>{video}</span>
            <button onClick={() => toggleBookmark(video)}>
              Remove Bookmark
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookmarkList;
