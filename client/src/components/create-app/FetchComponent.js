import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPDFAction } from "../../redux/slice/create-app.js/CreateAppAction";

const FetchComponent = ({ setPdf }) => {
  const CreateAppComponentStore = useSelector((state) => state.createAppStore);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPDFAction());
  }, [dispatch]);

  const handleSelectPdf = (pdf) => {
    setPdf(`http://localhost:5000/uploads/${pdf}`);
  };

  return (
    <div className="blader rounded-3xl p-5 space-y-2 h-[35rem] overflow-y-scroll">
      {CreateAppComponentStore &&
        CreateAppComponentStore.pdfs.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => handleSelectPdf(item.originalPdfName)}
              className="relative flex z-0 cursor-pointer"
            >
              <div className="p-2 bg-white blader w-fit rounded-full">
                <img
                  src="/IMAGES/pdf-icon.png"
                  alt=""
                  className="h-10 w-10 z-10"
                />
              </div>
              <div className="absolute top-2 left-0 ps-[4rem] uppercase rounded-3xl -z-10 p-2 blader">
                {item.pdfName}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FetchComponent;
