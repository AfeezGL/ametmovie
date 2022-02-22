import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./features/AnimeSlice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
});
