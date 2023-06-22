import React from "react";

const ScrollItem2 = () => {
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
            id="scroll-item-left"
            className="
            w-7/8
            h-7/8
            flex
            flex-col
            justify-center
            gap-5
        "
          >
            <div id="scroll-item-right-top" className="flex">
              <div
                id="scroll-item-transfer-type"
                className="
                            w-1/2"
                            flex
                            justify-start
              >
                Account
              </div>
              <div
                id="scroll-item-transfer-amount"
                className="
                    flex
                    justify-end
                    w-1/2"
              >
                1000<p className="text-[#9E9E9E]">/12000</p>
              </div>
            </div>
            <div
              id="scroll-item-right-bottom"
              className="w-full h-7/8 flex justify-end items-center"
            >
              <div id="scroll-item-transfer-bar" class="bg-gray-200 rounded-sm h-2.5 dark:bg-[#282C35] w-full">
              <div class="bg-[#1FCB4F] h-2.5 rounded-sm w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollItem2;
