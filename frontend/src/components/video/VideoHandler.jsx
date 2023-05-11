import React, { useRef, useState } from "react";

function VideoHandler() {
  const videoRef = useRef(null);
  const [recorder, setRecorder] = useState(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        const rec = new MediaRecorder(stream);
        setRecorder(rec);

        const recordedChunks = [];
        rec.ondataavailable = (e) => {
          if (e.data.size > 0) {
            recordedChunks.push(e.data);
          }
        };

        rec.onstop = () => {
          const recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
          const recordedUrl = URL.createObjectURL(recordedBlob);
          videoRef.current.src = recordedUrl;
        };

        rec.start();
      });
  };

  const stopRecording = () => {
    recorder.stop();
  };

  return (
    <div>
      <button onClick={startRecording}>녹화 시작</button>
      <button onClick={stopRecording}>녹화 중단</button>
      <video ref={videoRef} controls />
    </div>
  );
}

export default VideoHandler;
