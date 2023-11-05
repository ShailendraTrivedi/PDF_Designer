import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import RightPDF from "./RightPDF";
import LeftPDF from "./LeftPDF";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const RevealComponent = ({ pdf,selectedPages, setSelectedPages  }) => {
  const [count, setCount] = useState(1);
  return (
    <>
      {!pdf ? (
        <div className="text-center text-2xl">Select PDF To Reveal</div>
      ) : (
        <div className="flex flex-col m-10">
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
