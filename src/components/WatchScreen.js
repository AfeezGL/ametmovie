import { useParams } from "react-router-dom";
import demovideo from "../images/demovideo.mkv";
const WatchScreen = () => {
  const { movieId } = useParams();
  return (
    <div>
      <video controls src={demovideo}></video>
      <h1>{movieId}</h1>
    </div>
  );
};

export default WatchScreen;
