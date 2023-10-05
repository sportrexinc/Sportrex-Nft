import React from "react";
import { useNavigate } from "react-router-dom";
const YellowBtn = ({ path, name }: { path: string; name: string }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center text-[12px] px-10 h-[40px] md:h-auto md:text-base regular outline outline-yellow w-auto md:px-14 py-4 semibold font-semibold semibold text-yellow"
      onClick={() => navigate(path)}
    >
      <p>{name}</p>
    </div>
  );
};

export default YellowBtn;
