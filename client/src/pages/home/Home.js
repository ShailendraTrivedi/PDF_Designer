import React from "react";

const Home = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5 sm:p-10 p-5">
        <div className="">
          <img src="/IMAGES/home.jpg" alt="" className="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <ul className=" bg-[red] sm:text-3xl text-xl p-10 w-full text-white rounded-xl list-disc flex flex-col gap-5">
            <li>Thank You For using the PDF-Designer.</li>
            <li>Using Existence PDF pages now you can create a New PDF.</li>
            <li>And also you can Download your created PDF.</li>
            <li>For better understanding you can follow the Instruction.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
