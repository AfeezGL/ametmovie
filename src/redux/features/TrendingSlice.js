import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  movies: "",
};

export const fetchTrending = createAsyncThunk(
  "header/fetchTrending",
  async () => {
    const trendingRef = collection(db, "trending");
    const getTrending = await getDocs(trendingRef);
    const movies = getTrending.docs.map((movie) => ({
      id: movie.id,
      data: movie.data(),
    }));

    return movies;
  }
);

const trending = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default trending.reducer;
