import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearResumeFrom } from "../redux/features/continueWatchingSlice";
import {
  clearState,
  watchVideo,
} from "../redux/features/CurrentlyPlayingSlice";
const WatchScreen = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const resumeFrom = useSelector((state) => state.continueWatching.resumeFrom);
  const video = useSelector((state) => state.currentlyPlaying);
  const videoRef = useRef();

  useEffect(() => {
    dispatch(watchVideo(videoId));

    return () => {
      dispatch(clearResumeFrom());
      dispatch(clearState());
    };
  }, [videoId]);

  // resume video from where the user stopped
  const resumeVideo = () => {
    if (!resumeFrom) return;

    const duration = videoRef.current.duration;
    const time = Math.floor((Number(duration) * Number(resumeFrom)) / 100);
    videoRef.current.currentTime = time;
  };

  if (video.status === "busy")
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  if (video.error)
    return (
      <div className="spinner-container">
        <h2>Error: {video.error}</h2>
      </div>
    );

  return (
    <div>
      <video
        autoPlay
        onDurationChange={resumeVideo}
        ref={videoRef}
        controls
        src={video.videoUrl}
      ></video>
      <h1>{video.title}</h1>
      <br />
      <section aria-labelledby="section-title">
        <h2 id="section-title">Details</h2>
        <p>{video.details}</p>
      </section>
    </div>
  );
};

export default WatchScreen;
