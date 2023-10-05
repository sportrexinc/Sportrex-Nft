import React from "react";

interface TextAreaInput {
  placeholder: string;
  label: string;
  name: string;
}

const TextAreaInput = ({ placeholder, label, name }: TextAreaInput) => {
  return (
    <div className="flex flex-col space-y-2 md:space-y-4">
      <label className="text-white semibold text-sm md:text-lg regular">
        {label}
      </label>
      <textarea
        className="w-full h-auto min-h-16 xl:h-[156px] p-2 bg-blue-card  rounded-lg placeholder:text-grey-800 placeholder:text-sm outline-none"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default TextAreaInput;
