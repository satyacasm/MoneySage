import React from "react";
import logo from "./../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaMicrosoft, FaClipboard } from "react-icons/fa";

const SideBar = () => {

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaMicrosoft/>,
      link: "/dashboard"
    },
    {
      name: "Categories",
      icon: <FaClipboard/>,
      link: "/categories"
    },
    {
      name: "Categories",
      icon: <FaClipboard/>,
      link: "/categories"
    },
    {
      name: "Categories",
      icon: <FaClipboard/>,
      link: "/categories"
    },
    {
      name: "Categories",
      icon: <FaClipboard/>,
      link: "/categories"
    },
  ];

  return (
    <>
      <div
        id="sidebar"
        className="
            min-h-screen
            h-full
            flex
            flex-col
            w-[calc[100vw/6]]]
            min-w-sidebar
            bg-[#1A1C22]
            gap-6
            absolute
            "
      >
        <div id="logo" className="h-1/8 min-h-nav">
          <img src ={logo} alt = "logo" className="h-full"></img>
        </div>
        <div id="sidebar-menu" className="h-7/8 flex flex-col gap-10">
          {menuItems.map((item, index) => (
            <Link to="/" key={index} className="flex justify-center items-center gap-4">
              <div id = "icon" className="w-1/4 flex justify-end items-center text-2xl">
                {item.icon}
              </div>
              <div id = "name" className="w-3/4 flex justify-start items-center text-md">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
