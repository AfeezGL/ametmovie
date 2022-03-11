import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./features/AnimeSlice";
import continueWatchingReducer from "./features/continueWatchingSlice";
import currentlyPlayingReducer from "./features/CurrentlyPlayingSlice";
import movieReducer from "./features/MoviesSlice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    movie: movieReducer,
    continueWatching: continueWatchingReducer,
    currentlyPlaying: currentlyPlayingReducer,
  },
});
