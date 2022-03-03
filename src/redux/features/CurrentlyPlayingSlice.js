import { createSlice } from "@reduxjs/toolkit";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident saepe quod libero placeat! Facilis et nesciunt, repellat modi nam deserunt saepe? Quasi aliquid aspernatur eveniet, eos incidunt doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem asperiores pariatur nostrum dicta rerum dolorum, ea commodi perspiciatis blanditiis neque aut sunt sit quos culpa placeat earum. Dicta, distinctio!";

const initialState = {
  title: "",
  details: lorem,
};

const currentlyPlaying = createSlice({
  name: "currentlyPlaying",
  initialState,
  reducers: {
    setCurrentlyPlaying: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setCurrentlyPlaying } = currentlyPlaying.actions;

export default currentlyPlaying.reducer;
