import React, { useState } from "react";
import UploadComponent from "../../components/create-app/UploadComponent";
import RevealComponent from "../../components/create-app/RevealPDF/RevealComponent";
import FetchComponent from "../../components/create-app/FetchComponent";
import { genratePDF } from "../../redux/slice/create-app.js/CreateAppAction";
import { useDispatch } from "react-redux";

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
    dispatch(genratePDF(values));
  };

  return (
    <div className="min-h-screen p-10">
      <div className="grid grid-cols-2 gap-10 p-10">
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
