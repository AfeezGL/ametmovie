import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  status: "idle",
  movies: "",
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
  reducers: {},
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

export default continueWatching.reducer;
