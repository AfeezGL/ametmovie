import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  animes: "",
  status: "idle",
};

const getCategoryAnimes = async (category) => {
  const categoryCollectionRef = collection(db, "anime", "categories", category);
  const getAnimes = await getDocs(categoryCollectionRef);
  const data = getAnimes.docs.map((doc) => ({
    ...doc.data(),
  }));

  return {
    category,
    data,
  };
};

const getAnimes = createAsyncThunk("anime/getAnimes", async () => {
  const animeCollectinRef = collection(db, "anime");
  const categoriesRef = doc(animeCollectinRef, "categories");
  const getCategories = await getDoc(categoriesRef);
  const categories = getCategories.data();

  const allCategories = categories.names.map((name) => getCategoryAnimes(name));
  console.log(allCategories);

  return allCategories;
});

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnimes.pending, (state) => {
        state.status = "busy";
      })
      .addCase(getAnimes.fulfilled, (state, action) => {
        state.status = "idle";
        state.animes = action.payload;
      });
  },
});

export { getAnimes };

export default animeSlice.reducer;
