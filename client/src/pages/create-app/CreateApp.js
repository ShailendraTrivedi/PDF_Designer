import React, { useState } from "react";
import UploadComponent from "../../components/create-app/UploadComponent";
import RevealComponent from "../../components/create-app/RevealPDF/RevealComponent";
import FetchComponent from "../../components/create-app/FetchComponent";
import { useDispatch } from "react-redux";
import { genratePFD } from "../../redux/slice/create-app.js/CreateAppAction";
import { Link } from "react-router-dom";

const CreateApp = () => {
  const dispatch = useDispatch();
  const [pdf, setPdf] = useState();
  const [selectedPages, setSelectedPages] = useState([]);
  const handleGenrate = () => {
    const arr = pdf.split("/");
    const values = {
      pdfName: arr[arr.length - 1],
      selectedPages: selectedPages,
    };
    dispatch(genratePFD(values));
  };

  return (
    <div className="min-h-screen sm:p-10 p-2">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:p-10">
        <UploadComponent />
        <FetchComponent setPdf={setPdf} />
      </div>
      <hr className="border-2 border-[red]" />
      <RevealComponent
        pdf={pdf}
        selectedPages={selectedPages}
        setSelectedPages={setSelectedPages}
      />
      {pdf && (
        <div className="flex justify-center">
          <button
            onClick={handleGenrate}
            className="w-[20rem] p-2 bg-blue-700 text-white rounded-full"
          >
            Generate New PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateApp;
