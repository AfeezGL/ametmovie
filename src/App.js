import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Friends from "./components/Friends";
import Layout from "./components/Layout";
import PrimaryNav from "./components/PrimaryNav";
import { fetchContinueWatching } from "./redux/features/ContinueWatchingSlice";
import { BrowserRouter as Router } from "react-router-dom";
// import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
// import { db } from "./firebase";
import { fetchTrending } from "./redux/features/TrendingSlice";

function App() {
  const dispatch = useDispatch();
  const continueWatching = useSelector(
    (state) => state.continueWatching.movies
  );
  const trending = useSelector((state) => state.trending.movies);

  useEffect(() => {
    // fetch all unfinished movies on first page render
    if (!continueWatching) dispatch(fetchContinueWatching());

    // fetch trending movies on first mage render
    if (!trending) dispatch(fetchTrending());

    // const setVideoUrls = async () => {
    //   console.log("start");
    //   const category = "Sci-fi shows";
    //   const moviesRef = collection(db, "series", "categories", category);
    //   const movies = await getDocs(moviesRef);

    //   console.log(movies);

    //   movies.docs.forEach(async (movie) => {
    //     const videosRef = collection(db, "videos");

    //     const addVideo = await addDoc(videosRef, {
    //       title: movie.data().title,
    //       videoUrl:
    //         "https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/demo%20video%2FThere's%20nobody%20else%20low%20qual.mp4?alt=media&token=0f738bb7-906d-4f02-9a59-ce80591011a7",
    //     });

    //     const movieRef = doc(db, "series", "categories", category, movie.id);

    //     await setDoc(
    //       movieRef,
    //       {
    //         videoId: addVideo.id,
    //       },
    //       {
    //         merge: true,
    //       }
    //     );

    //     console.log("success");
    //   });
    // };

    // setVideoUrls();
  }, []);

  return (
    <Router>
      <div className="App">
        <PrimaryNav />
        <Layout />
        <Friends />
      </div>
    </Router>
  );
}

export default App;
