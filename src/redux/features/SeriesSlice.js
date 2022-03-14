import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  shows: "",
  status: "idle",
};

const fetchSeries = createAsyncThunk("series/getSeries", async () => {
  const collectinRef = collection(db, "series");
  const categoriesRef = doc(collectinRef, "categories");
  const getCategories = await getDoc(categoriesRef);
  const categories = getCategories.data();

  const allCategories = categories.names.map(async (category) => {
    const categoryCollectionRef = collection(
      db,
      "series",
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

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state) => {
        state.status = "busy";
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.status = "idle";
        state.shows = action.payload;
      });
  },
});

export { fetchSeries };

export default seriesSlice.reducer;
