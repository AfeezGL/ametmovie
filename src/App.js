import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Friends from "./components/Friends";
import HomeScreen from "./components/HomeScreen";
import Nav from "./components/Nav";
import { fetchContinueWatching } from "./redux/features/continueWatchingSlice";

function App() {
  const dispatch = useDispatch();
  const continueWatching = useSelector(
    (state) => state.continueWatching.movies
  );

  useEffect(() => {
    if (!continueWatching) dispatch(fetchContinueWatching());
  }, []);

  return (
    <div className="App">
      <Nav />
      <HomeScreen />
      <Friends />
    </div>
  );
}

export default App;
