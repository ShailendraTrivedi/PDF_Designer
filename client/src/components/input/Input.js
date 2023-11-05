import { ErrorMessage, Field } from "formik";
import React from "react";

const Input = ({ label, type, name, placeholder, className }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={`focus:outline-none border-b-2 border-black focus:border-[red] ${className}`}
      />
      <div className="text-red-500 text-[10px] font-bold">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default Input;
