import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LinkBtn = ({ path, name }: { path: string; name: string }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center justify-center text-[12px] md:text-base regular  bg-blue-btn w-auto md:px-10 md:py-4 px-4 h-[40px] md:h-auto semibold font-semibold semibold text-white cursor-pointer"
      onClick={() => navigate(path)}
    >
      <p>{name}</p>
    </div>
  );
};

export default LinkBtn;
