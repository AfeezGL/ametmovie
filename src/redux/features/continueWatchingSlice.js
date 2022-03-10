import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  status: "idle",
  movies: "",
  resumeFrom: "",
};

const fetchContinueWatching = createAsyncThunk(
  "continueWatching/fetchContinueWatching",
  async () => {
    const moviesRef = collection(db, "continueWatching");
    const getMovies = await getDocs(moviesRef);
    const movies = getMovies.docs.map((movie) => ({
      id: movie.id,
      data: movie.data(),
    }));

    return movies;
  }
);

const continueWatching = createSlice({
  name: "continueWatching",
  initialState,
  reducers: {
    setResumeFrom: (state, action) => {
      state.resumeFrom = action.payload;
    },
    clearResumeFrom: (state) => {
      state.resumeFrom = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContinueWatching.pending, (state) => {
        state.status = "busy";
      })
      .addCase(fetchContinueWatching.fulfilled, (state, action) => {
        state.status = "idle";
        state.movies = action.payload;
      });
  },
});

export { fetchContinueWatching };

export const { setResumeFrom, clearResumeFrom } = continueWatching.actions;

export default continueWatching.reducer;
