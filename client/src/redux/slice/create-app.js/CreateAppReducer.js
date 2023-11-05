import { createSlice } from "@reduxjs/toolkit";

const CreateAppSlice = createSlice({
  name: "create-app",
  initialState: {
    pdfs: [],
    loading: false,
  },
  reducers: {
    fetchPdfReq: (state) => {
      state.loading = true;
    },
    fetchPdfSuc: (state, action) => {
      state.loading = false;
      state.pdfs = [...state.pdfs, ...action.payload.message];
    },
    fetchPdfErr: (state) => {
      state.loading = false;
    },
    uploadSucc: (state, action) => {
      state.pdfs = [...state.pdfs, action.payload.message];
    },
  },
});

export const { fetchPdfReq, fetchPdfSuc, fetchPdfErr, uploadSucc } =
  CreateAppSlice.actions;
const CreateAppReducer = CreateAppSlice.reducer;
export default CreateAppReducer;
