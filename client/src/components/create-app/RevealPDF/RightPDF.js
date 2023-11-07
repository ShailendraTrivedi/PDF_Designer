import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import "./rightPDF.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const RightPDF = ({ pdf, count, setCount }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setPageNumber(count);
  }, [count]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const increasePageNumber = () => {
    if (pageNumber < numPages) {
      setCount(count + 1);
      setPageNumber(pageNumber + 1);
    }
  };

  const decreasePageNumber = () => {
    if (pageNumber > 1) {
      setCount(count - 1);
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <div className="flex flex-col gap-5 w-full p-5">
      <div className="blader">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      <div className="flex justify-between items-center w-full">
        <button onClick={decreasePageNumber}>
          <AiOutlineLeft size={30} />
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={increasePageNumber}>
          <AiOutlineRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default RightPDF;
