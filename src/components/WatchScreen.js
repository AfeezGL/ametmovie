import { useSelector } from "react-redux";
import demovideo from "../images/demovideo.mkv";
const WatchScreen = () => {
  const title = useSelector((state) => state.currentlyPlaying.title);
  const details = useSelector((state) => state.currentlyPlaying.details);
  return (
    <div>
      <video autoPlay controls src={demovideo}></video>
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
