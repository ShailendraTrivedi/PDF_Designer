import axios from "axios";
import { toast } from "react-toastify";
import {
  fetchPdfErr,
  fetchPdfReq,
  fetchPdfSuc,
  uploadSucc,
} from "./CreateAppReducer";

export const postPDFAction = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/pdf/upload-file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        dispatch(uploadSucc(response.data));
        toast.success("File uploaded successfully:");
      }
    } catch (error) {
      toast.error("Error uploading the PDF");
    }
  };
};

export const getPDFAction = () => {
  return async (dispatch) => {
    dispatch(fetchPdfReq());
    try {
      const response = await axios.get("http://localhost:5000/pdf/fetch-files");
      if (response.status === 200) {
        dispatch(fetchPdfSuc(response.data));
      }
    } catch (error) {
      dispatch(fetchPdfErr());
    }
  };
};

export const genratePDF = (values) => {
  return async () => {
    try {
      console.log(values);
      const response = await axios.post(
        "http://localhost:5000/pdf/generate-pdf",
        values
      );
      console.log(response);
    } catch (error) {}
  };
};
