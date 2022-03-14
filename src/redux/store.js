import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./features/AnimeSlice";
import continueWatchingReducer from "./features/ContinueWatchingSlice";
import currentlyPlayingReducer from "./features/CurrentlyPlayingSlice";
import movieReducer from "./features/MoviesSlice";
import seriesReducer from "./features/SeriesSlice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    movie: movieReducer,
    series: seriesReducer,
    continueWatching: continueWatchingReducer,
    currentlyPlaying: currentlyPlayingReducer,
  },
});
