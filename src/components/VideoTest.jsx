import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:5000";

function VideoTest() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("connect", () => {
      console.log("Connected to server");
      socket.emit('start_stream');
    });

    socket.on("stream_status", (data) => {
      console.log(data);
    });

    socket.on("video_frame", (data) => {
        // Data is already a base64 string
        let src = "data:image/jpeg;base64," + data;
        setResponse(src);
    });

    // Clean up the effect
    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <img src={response} alt="Video Feed" />
    </div>
  );
}

export default VideoTest;
