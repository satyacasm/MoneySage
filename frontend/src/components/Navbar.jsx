import React from "react";
import {FaBell} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div
        id="navbar"
        className="
            min-h-nav
            w-[calc(500vw/6)]
            flex 
            justify-center 
            items-center 
            bg-[#1A1C22]
            p-4
            absolute
            top-0
            right-0
            "
      >
        <div
          id="title"
          className="
                h-full 
                w-1/2
                flex
                justify-start
                items-center
                text-3xl
                font-bold
                "
        >
          Dashboard
        </div>
        <div
          id="rest"
          className="
                h-full 
                w-1/2
                flex
                justify-end
                items-center
                gap-4
                "
        >
          <div id = "notification" className="h-3/4 aspect-square flex justify-center items-center">
            <FaBell className="h-4/5 w-4/5"/>
          </div>
          <div id = "profile" className="h-3/4 aspect-square bg-red rounded-md"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
