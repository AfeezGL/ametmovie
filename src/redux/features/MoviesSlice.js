import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  movies: "",
  status: "idle",
};

const fetchMovies = createAsyncThunk("movies/getMovies", async () => {
  const collectinRef = collection(db, "movies");
  const categoriesRef = doc(collectinRef, "categories");
  const getCategories = await getDoc(categoriesRef);
  const categories = getCategories.data();

  const allCategories = categories.names.map(async (category) => {
    const categoryCollectionRef = collection(
      db,
      "movies",
      "categories",
      category
    );
    const getMovies = await getDocs(categoryCollectionRef);
    const movies = getMovies.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }));

    return {
      name: category,
      movies,
    };
  });

  const objects = await Promise.all(allCategories);
  return objects;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "busy";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "idle";
        state.movies = action.payload;
      });
  },
});

export { fetchMovies };

export default moviesSlice.reducer;
