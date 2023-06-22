import React from "react";

const ScrollItem1 = () => {
  return (
    <>
      <div
        id="scroll-item"
        className="
            flex
            w-full
            h-full
            bg-transparent
            items-center
            justify-center
            p-8
          "
      >
        <div className="w-full h-full flex gap-4 border-b-2 border-[#393939] pb-2">
          <div
            id="scroll-item-left"
            className="
            w-1/8
            h-7/8
            rounded-xl
            bg-login
        "
          ></div>
          <div
            id="scroll-item-middle"
            className="
            flex-grow
            h-7/8
            flex
            flex-col
            justify-center
        "
          >
            <div id="scroll-item-transfer-type" className="text-[#9E9E9E]">
              {" "}
              Transfers From{" "}
            </div>
            <div id="scroll-item-transfer-amount" className="font-bold">
              Anert Moodie
            </div>
          </div>
          <div
            id="scroll-item-right"
            className="w-1/4 h-7/8 flex justify-end items-center"
          >
            <div id="scroll-item-transfer-amount" className="">
              +$1000.00
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollItem1;
