/* eslint-disable indent */
import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",

  initialState: {
    show: false,
    children: null,
  },

  reducers: {
    showModal: (state, actions) => {
      state.show = true;
      state.children = actions.payload;
    },

    hideModal: (state) => {
      state.show = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
