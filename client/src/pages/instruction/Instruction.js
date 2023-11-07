import React from "react";
import { BiChevronsRight } from "react-icons/bi";
const Instruction = () => {
  const steps = [
    {
      step: 1,
      instruction: "Enter the File Name and Upload the pdf.",
      imageSrc: "/IMAGES/Step1.png",
    },
    {
      step: 2,
      instruction: "Selected uploaded PDF file.",
      imageSrc: "/IMAGES/Step2.png",
    },
    {
      step: 3,
      instruction:
        "Left Side your PDF will reveal you can also go through all pages by using left right button.",
      imageSrc: "/IMAGES/Step3.png",
    },
    {
      step: 4,
      instruction:
        "Right Side you can select the pages to create a new PDF document.",
      imageSrc: "/IMAGES/Step4.png",
    },
    {
      step: 5,
      instruction: "Click to generate the PDF document.",
      imageSrc: "/IMAGES/Step5.png",
    },
    {
      step: 6,
      instruction:
        "Go above and see your new pdf will generated. And you can download it also by clicking to download.",
      imageSrc: "/IMAGES/Step6.png",
    },
  ];
  return (
    <div className="sm:p-10 p-2">
      <div className="sm:text-5xl text-2xl text-center p-10">
        To Create a PDF follow this Instructions
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
        {steps.map((step, i) => {
          return (
            <div key={i} className="p-5 blader rounded-2xl m-2">
              <label htmlFor="" className="sm:text-3xl text-xl font-bold">
                Step {step.step}
              </label>
              <img
                src={step.imageSrc}
                alt=""
                className=" h-[30rem] w-[30rem] object-contain "
              />
              <div className="flex gap-2 items-center">
                <BiChevronsRight size={40} />
                {step.instruction}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instruction;
