import { createSlice } from "@reduxjs/toolkit";

import workersData from "../workers";

export const workerSlice = createSlice({
  name: "worker",

  initialState: {
    worker: workersData,
  },

  reducers: {
    //нужно будет вписать редукторы
  },
});

// export const { редукторы } = counterSlice.actions

export default workerSlice.reducer;
