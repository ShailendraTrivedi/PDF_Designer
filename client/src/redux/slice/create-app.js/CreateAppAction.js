import axios from "axios";
import { toast } from "react-toastify";
import {
  fetchPdfErr,
  fetchPdfReq,
  fetchPdfSuc,
  uploadNewPDFSucc,
  uploadSucc,
} from "./CreateAppReducer";
import { REACT_APP_LOCAL_STORAGE } from "../../../constant";

export const postPDFAction = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${REACT_APP_LOCAL_STORAGE}/pdf/upload-file`,
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
      const response = await axios.get(
        `${REACT_APP_LOCAL_STORAGE}/pdf/fetch-files`
      );
      if (response.status === 200) {
        dispatch(fetchPdfSuc(response.data));
      }
    } catch (error) {
      dispatch(fetchPdfErr());
    }
  };
};

export const genratePFD = (values) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${REACT_APP_LOCAL_STORAGE}/pdf/generate-pdf`,
        values
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(uploadNewPDFSucc(response.data));
        toast.success("Genrated PDF generated successfully");
      }
    } catch (error) {}
  };
};
