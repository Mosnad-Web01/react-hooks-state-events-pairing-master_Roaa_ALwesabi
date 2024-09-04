import React, { useState } from "react";
import video from "../data/video.js";
import VideoDetails from "./VideoDetails";
import Comments from "./Comments";

function App() {
  const [showComments, setShowComments] = useState(true);

  function toggleComments() {
    setShowComments(!showComments);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails video={video} />
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <Comments comments={video.comments} />}
    </div>
  );
}

export default App;
