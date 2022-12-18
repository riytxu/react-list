import { createSlice } from "@reduxjs/toolkit";

export const workerSlice = createSlice({
  name: "worker",

  initialState: {
    worker: [],
  },

  reducers: {
    //нужно будет вписать редукторы
  },
});

// export const { редукторы } = counterSlice.actions

export default workerSlice.reducer;
