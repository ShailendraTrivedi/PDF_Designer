import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPDFAction } from "../../redux/slice/create-app.js/CreateAppAction";
import { Link } from "react-router-dom";
import { REACT_APP_LOCAL_STORAGE } from "../../constant";

const FetchComponent = ({ setPdf }) => {
  const CreateAppComponentStore = useSelector((state) => state.createAppStore);

  console.log(CreateAppComponentStore);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPDFAction());
  }, [dispatch]);

  const handleSelectPdf = (pdf) => {
    setPdf(`${REACT_APP_LOCAL_STORAGE}/uploads/${pdf}`);
  };
  return (
    <div className="blader rounded-3xl p-5 space-y-6 h-[35rem] overflow-y-scroll">
      {CreateAppComponentStore &&
        CreateAppComponentStore.pdfs.map((item, i) => {
          return (
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
              <div
                key={i}
                onClick={() => handleSelectPdf(item.originalPdfName)}
                className="sm:col-span-2 relative flex z-0 cursor-pointer"
              >
                <div className="absolute -top-2 left-0  p-2 bg-white blader w-fit rounded-full">
                  <img
                    src="/IMAGES/pdf-icon.png"
                    alt=""
                    className="h-10 w-10 z-10"
                  />
                </div>
                <div className="ps-[4rem] uppercase rounded-3xl -z-10 p-2 blader">
                  {item.pdfName}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href={`${REACT_APP_LOCAL_STORAGE}/uploads/${item.originalPdfName}`}
                  download="Download PDF"
                >
                  <button className="bg-blue-700 p-2 w-[10rem] text-white">
                    Download PDF
                  </button>
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FetchComponent;
