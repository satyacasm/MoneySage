import React from "react";

const ScrollBox = ({ children }) => {
  return (
    <>
      <div
        id="container"
        className="
            h-full
            w-full
            grid 
            grid-rows-8
            grid-cols-1
            bg-[#1A1C22]
            rounded-2xl
            pt-5
            "
      >
        <div
          id="header"
          className="
            flex
            justify-center
            items-center
            w-full
        "
        >
          <div
            id="title"
            className="
                w-3/4
                flex
                items-center
                justify-start
                text-2xl
            "
          >
            Recent Transactions
          </div>
          <div id="see-all">
            <button className="text-[#1FCB4f] flex justify-end items-center">See all</button>
          </div>
        </div>
        <div
          id="scroll-content"
          className="
            grid
            grid-rows-8
            w-full
            flex-grow
            overflow-y-scroll
            no-scrollbar
            "
        >
            {children}
        </div>
      </div>
    </>
  );
};

export default ScrollBox;
