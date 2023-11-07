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
    uploadNewPDFSucc: (state, action) => {
      state.pdfs = [...state.pdfs, action.payload];
    },
  },
});

export const {
  fetchPdfReq,
  fetchPdfSuc,
  fetchPdfErr,
  uploadSucc,
  uploadNewPDFSucc,
} = CreateAppSlice.actions;
const CreateAppReducer = CreateAppSlice.reducer;
export default CreateAppReducer;
