import { createSlice } from "@reduxjs/toolkit";

import workersData from "../workers";

export const workerSlice = createSlice({
  name: "worker",

  initialState: {
    worker: workersData,
  },

  reducers: {
    addWorker: (state, actions) => {
      return {
        ...state,
        worker: [...state.worker, actions.payload],
      };
    },
    deleteWorker: (state, actions) => {
      return {
        ...state,
        worker: [
          ...state.worker.filter((item) => {
            return item.id !== actions.payload;
          }),
        ],
      };
    },
    editWorker: (state, actions) => {
      return {
        ...state,
        worker: [
          ...state.worker.map((item) => {
            if (item.id === actions.payload.id) {
              return actions.payload;
            } else {
              return item;
            }
          }),
        ],
      };
    },
  },
});

export const { addWorker, deleteWorker, editWorker } = workerSlice.actions;
export default workerSlice.reducer;
