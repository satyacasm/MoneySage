import React from "react";

const InputField = (props) => {
  return (
    <input
      onChange={props.onChange}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      className="
        bg-grey
        rounded-md
        p-2
        :focus outline-none
        w-full
        h-full
        "
    />
  );
};

export default InputField;
