import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./features/AnimeSlice";
import continueWatchingReducer from "./features/continueWatchingSlice";
import currentlyPlayingReducer from "./features/CurrentlyPlayingSlice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    continueWatching: continueWatchingReducer,
    currentlyPlaying: currentlyPlayingReducer,
  },
});
