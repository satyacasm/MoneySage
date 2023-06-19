import React from "react";

const Button = (props) => {
  return (
    <button
      className="
      bg-red
      hover:bg-rose-700 
      text-white 
      font-bold 
      py-2 
      px-4 
      rounded-full
      h-full
      w-full
      "
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
