import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import RightPDF from "./RightPDF";
import LeftPDF from "./LeftPDF";
import pdfWorkerSrc from "pdfjs-dist/build/pdf.worker.min.js";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;

const RevealComponent = ({ pdf, selectedPages, setSelectedPages }) => {
  const [count, setCount] = useState(1);
  return (
    <>
      {!pdf ? (
        <div className="text-center text-2xl">Select PDF To Reveal</div>
      ) : (
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:m-10 m-2">
          <RightPDF pdf={pdf} count={count} setCount={setCount} />
          <LeftPDF
            pdf={pdf}
            count={count}
            setCount={setCount}
            selectedPages={selectedPages}
            setSelectedPages={setSelectedPages}
          />
          <div className=""></div>
        </div>
      )}
    </>
  );
};

export default RevealComponent;
