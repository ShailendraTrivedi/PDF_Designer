import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "./leftPDF.css";

const LeftPDF = ({ pdf ,count, setCount, selectedPages, setSelectedPages }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const togglePageSelection = (pageNumber) => {
    if (selectedPages.includes(pageNumber)) {
      setSelectedPages(selectedPages.filter((page) => page !== pageNumber));
    } else {
      setSelectedPages([...selectedPages, pageNumber]);
    }
  };


  return (
    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
      <div className="grid grid-cols-5 gap-5 w-full p-5">
        {Array.from({ length: numPages }, (_, i) => {
          const checked = selectedPages.includes(i + 1);
          const index = selectedPages.indexOf(i + 1);
          return (
            <>
              <div
                className={`relative z-0 ${
                  i + 1 === count
                    ? "shadow-[0px_0px_10px_5px] shadow-blue-500"
                    : "hover:shadow-[0px_0px_10px_5px] "
                }`}
              >
                <label htmlFor={i} className="absolute top-1 right-1 z-10">
                  <div
                    className={`blader ${
                      checked ? "bg-blue-600" : "bg-white"
                    } text-white text-center flex justify-center items-center h-8 w-8 font-bold`}
                  >
                    {checked && <span>{index + 1}</span>}
                  </div>
                  <input
                    id={i}
                    type="checkbox"
                    className="hidden"
                    onChange={() => togglePageSelection(i + 1)}
                    checked={checked}
                  />
                </label>
                <Page
                  onClick={() => setCount(i + 1)}
                  key={i + 1}
                  pageNumber={i + 1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            </>
          );
        })}
      </div>
    </Document>
  );
};

export default LeftPDF;
