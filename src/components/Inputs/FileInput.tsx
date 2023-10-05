import React from "react";
interface FileInput {
  onChange?: React.ChangeEvent<HTMLInputElement>;
  name?: string;
  label?: string;
}
const FileInput = ({ onChange, name, label }: FileInput) => {
  return (
    <div className="flex flex-col space-y-4">
      <label className="text-white semibold text-sm md:text-lg regular">
        {label}
      </label>
      <div className="bg-blue-card h-16 lg:h-[145px] w-full flex justify-center items-center rounded-[10px] ">
        <div className="flex-col relative ">
          <input
            type="file"
            className="absolute left-20 opacity-0 cursor-pointer top-0 w-full md:w-[200px] h-24"
            name={name}
          />
          <p className="text-white text-sm md:text-md regular text-center cursor-pointer ">
            Click to upload file (s)
          </p>
          <p className="text-grey-800 text-sm md:text-md regular text-center">
            JPG, PNG, GIF, WEBP, MP4 or MP3. Max 30mb.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
