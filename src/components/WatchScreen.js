import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const WatchScreen = () => {
  const { percentageSeen } = useParams();
  const title = useSelector((state) => state.currentlyPlaying.title);
  const details = useSelector((state) => state.currentlyPlaying.details);
  const videoRef = useRef();

  const resumeVideo = () => {
    if (percentageSeen) {
      const duration = videoRef.current.duration;
      const time = Math.floor(
        (Number(duration) * Number(percentageSeen)) / 100
      );
      videoRef.current.currentTime = time;
    }
  };

  return (
    <div>
      <video
        autoPlay
        onDurationChange={resumeVideo}
        ref={videoRef}
        controls
        src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/demo%20video%2FThere's%20nobody%20else%20low%20qual.mp4?alt=media&token=0f738bb7-906d-4f02-9a59-ce80591011a7"
      ></video>
      <h1>{title}</h1>
      <br />
      <section aria-labelledby="section-title">
        <h2 id="section-title">Details</h2>
        <p>{details}</p>
      </section>
    </div>
  );
};

export default WatchScreen;
