import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import "./rightPDF.css";

const RightPDF = ({pdf,  count, setCount }) => {
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
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <div className="flex flex-col items-center w-full">
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div className="flex justify-between w-full">
          <button onClick={decreasePageNumber}>Previous Page</button>
          <button onClick={increasePageNumber}>Next Page</button>
        </div>
      </div>
    </div>
  );
};

export default RightPDF;
