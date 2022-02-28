import demovideo from "../images/demovideo.mkv";
const WatchScreen = () => {
  return (
    <div>
      <video controls src={demovideo}></video>
    </div>
  );
};

export default WatchScreen;
