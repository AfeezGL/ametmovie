import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./features/AnimeSlice";
import continueWatchingReducer from "./features/continueWatchingSlice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    continueWatching: continueWatchingReducer,
  },
});
