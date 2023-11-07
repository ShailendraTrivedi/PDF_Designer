import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloudUpload } from "react-icons/ai";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { postPDFAction } from "../../redux/slice/create-app.js/CreateAppAction";
import FetchComponent from "./FetchComponent";

const UploadComponent = () => {
  const dispatch = useDispatch();
  const userName =  JSON.parse(localStorage.getItem("user"));

  const handleFormSubmit = (values, { resetForm }) => {
    const { pdfName, pdfFile } = values;

    if (pdfFile && pdfFile.type === "application/pdf") {
      const newPdfFiles = { userName, pdfName, pdfFile };
      dispatch(postPDFAction(newPdfFiles));
    }
  };

  const validationSchema = Yup.object({
    pdfName: Yup.string().required("File Name is required"),
    pdfFile: Yup.mixed()
      .required("PDF File is required")
      .test("fileType", "Only PDF files are allowed", (value) => {
        if (value) {
          return value.type === "application/pdf";
        }
        return true;
      }),
  });
  return (
    <div>
      <Formik
        initialValues={{ pdfName: "", pdfFile: null }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="p-10 flex flex-col gap-5 items-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="pdfName" className="font-bold">
                File Name
              </label>
              <Field
                name="pdfName"
                type="text"
                className="border-b-2 border-black focus:outline-none w-full"
              />
              <div className="text-[red] text-[10px]">
                <ErrorMessage name="pdfName" />
              </div>
            </div>
            <label htmlFor="pdfFile" className="w-full">
              <div className="w-full h-[20rem] blader border-dotted bg-gray-200 flex flex-col justify-center items-center rounded-xl">
                {values.pdfFile ? (
                  <>
                    <AiOutlineCheckCircle
                      size={100}
                      className="text-green-700"
                    />
                    <div className="">Click here to upload new File</div>
                  </>
                ) : (
                  <>
                    <AiOutlineCloudUpload size={40} />
                    <div className="text-xl">Click here to upload</div>
                  </>
                )}
              </div>
              <input
                id="pdfFile"
                name="pdfFile"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(event) => {
                  setFieldValue("pdfFile", event.currentTarget.files[0]);
                }}
              />
              <div className="text-[red] text-[10px]">
                <ErrorMessage name="pdfFile" />
              </div>
            </label>
            <div className="">
              <button
                type="submit"
                className="w-[10rem] bg-blue-700 text-white p-2 rounded-3xl"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UploadComponent;
