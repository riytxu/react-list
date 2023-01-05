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
              const result = {
                id: actions.payload.id,
                name: actions.payload.name,
                surname: actions.payload.surname,
                tasks: item.tasks,
              };
              return result;
            } else {
              return item;
            }
          }),
        ],
      };
    },
    addTask: (state, actions) => {
      const { task, id } = actions.payload;
      return {
        ...state,
        worker: [
          ...state.worker.map((item) => {
            if (item.id == id) {
              //TODO проблема со строгим равенством
              const result = {
                ...item,
                tasks: [...item.tasks, task],
              };
              return result;
            }
            return item;
          }),
        ],
      };
    },
  },
});

export const { addWorker, deleteWorker, editWorker, addTask } =
  workerSlice.actions;
export default workerSlice.reducer;
