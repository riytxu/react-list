import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./reducers/modalSlice";
import workerSlice from "./reducers/workerSlice";

export const store = configureStore({
  reducer: {
    worker: workerSlice,
    modal: modalSlice,
  },
});
