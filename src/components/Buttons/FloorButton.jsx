import React from "react";

const FloorButton = ({ label, onClick }) => {
  return (
    <button
      className=" absolute inset-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-10 h-10"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FloorButton;
