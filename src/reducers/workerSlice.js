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
      const { id, name, surname } = actions.payload;
      return {
        ...state,
        worker: [
          ...state.worker.map((item) => {
            if (item.id === id) {
              const result = {
                ...item,
                name: name,
                surname: surname,
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
    statusTask: (state, actions) => {
      const { idWorker, idTask } = actions.payload;
      return {
        ...state,
        worker: [
          ...state.worker.map((item) => {
            if (item.id === idWorker) {
              const result = {
                ...item,
                tasks: [
                  ...item.tasks.map((item) => {
                    if (item.id === idTask) {
                      const result = {
                        ...item,
                        isDone: !item.isDone,
                      };
                      return result;
                    }
                    return item;
                  }),
                ],
              };
              return result;
            }
            return item;
          }),
        ],
      };
    },
    delTask: (state, actions) => {
      const { idWorker, idTask } = actions.payload;
      return {
        ...state,
        worker: [
          ...state.worker.map((item) => {
            if (item.id === idWorker) {
              const result = {
                ...item,
                tasks: [
                  ...item.tasks.filter((item) => {
                    return item.id !== idTask;
                  }),
                ],
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

export const {
  addWorker,
  deleteWorker,
  editWorker,
  addTask,
  statusTask,
  delTask,
} = workerSlice.actions;
export default workerSlice.reducer;
