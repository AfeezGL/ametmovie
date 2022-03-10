import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident saepe quod libero placeat! Facilis et nesciunt, repellat modi nam deserunt saepe? Quasi aliquid aspernatur eveniet, eos incidunt doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem asperiores pariatur nostrum dicta rerum dolorum, ea commodi perspiciatis blanditiis neque aut sunt sit quos culpa placeat earum. Dicta, distinctio!";

const initialState = {
  title: "",
  details: lorem,
  videoUrl: "",
  status: "idle",
  error: "",
};

const watchVideo = createAsyncThunk(
  "watchScreen/watchVideo",
  async (payload) => {
    const videoRef = doc(db, "videos", payload);
    const getVideo = await getDoc(videoRef);
    return getVideo.data();
  }
);

const currentlyPlaying = createSlice({
  name: "currentlyPlaying",
  initialState,
  reducers: {
    setCurrentlyPlaying: (state, action) => {
      state.title = action.payload;
    },
    // clear state when component unmounts
    clearState: (state) => {
      state.title = "";
      state.videoUrl = "";
      state.status = "";
    },
  },
  extraReducers: (builer) => {
    builer
      .addCase(watchVideo.pending, (state) => {
        state.status = "busy";
      })
      .addCase(watchVideo.fulfilled, (state, action) => {
        state.title = action.payload.title;
        state.videoUrl = action.payload.videoUrl;
        state.status = "idle";
      })
      .addCase(watchVideo.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setCurrentlyPlaying, clearState } = currentlyPlaying.actions;

export { watchVideo };

export default currentlyPlaying.reducer;
