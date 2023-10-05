import React from 'react';
export interface ActionType {
  action: any;
  name: string;
}
const ActionBtn = ({ action, name } :ActionType) => {
  return (
    <button
      className={`flex items-center justify-center text-[16px] light bg-blue-btn text-white px-4 py-2  w-full md:py-4 h-[40px] md:h-auto cursor-pointer semibold  `}
      onClick={action}
    >
      {name}
    </button>
  );
};

export default ActionBtn;
