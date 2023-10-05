import React from "react";
interface TextInput {
  placeholder: string;
  label: string;
  name: string;
}
const TextInput = ({ placeholder, label, name }: TextInput) => {
  return (
    <div className="flex flex-col space-y-4">
      <label className="text-white semibold text-sm md:text-lg regular">
        {label}
      </label>
      <input
        className="w-full p-2 bg-blue-card text-sm md:text-base regular  rounded-lg placeholder:text-grey-800 placeholder:text-sm"
        type="text"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default TextInput;
