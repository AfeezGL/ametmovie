import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Friends from "./components/Friends";
import HomeScreen from "./components/HomeScreen";
import PrimaryNav from "./components/PrimaryNav";
import { fetchContinueWatching } from "./redux/features/continueWatchingSlice";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const continueWatching = useSelector(
    (state) => state.continueWatching.movies
  );

  useEffect(() => {
    if (!continueWatching) dispatch(fetchContinueWatching());
  }, []);

  return (
    <Router>
      <div className="App">
        <PrimaryNav />
        <HomeScreen />
        <Friends />
      </div>
    </Router>
  );
}

export default App;
