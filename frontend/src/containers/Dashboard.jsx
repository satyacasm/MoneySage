import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import AmountBox from "../components/AmountBox";
import ScrollBox from "../components/ScrollBox";
import ScrollItem1 from "../components/ScrollItem1";
import ActivityGraph from "../components/ActivityGraph";

const Dashboard = () => {
  const amounts = ["Balance", "Income", "Expenses", "Savings"];
  const children = [
    <ScrollItem1></ScrollItem1>,
    <ScrollItem1></ScrollItem1>,
    <ScrollItem1></ScrollItem1>,
    <ScrollItem1></ScrollItem1>,
    <ScrollItem1></ScrollItem1>,
    <ScrollItem1></ScrollItem1>,
    <ScrollItem1></ScrollItem1>,
  ];
  return (
    // Fix this, below is not working
    <>
      {/* <Navbar />
      <SideBar />
      <div
        id="container"
        className="
        h-[calc(100vh-60px))]
        w-[calc(500vw/6)]
        flex
        justify-center
        items-center
        bg-[#282C35]
        absolute
        top-[60px]
        right-0
        "
      >
        <div
          id="dashboard-main"
          className="w-5/6 h-full flex flex-col items-center justify-center"
        >
          <div
            id="dashboard-amounts"
            className="flex justify-center items-center h-1/6 w-full gap-[5%] pt-4"
          >
            {amounts.map((amount) => (
              <div className="h-full w-1/5">
                <AmountBox type={amount} amount={0} />
              </div>
            ))}
          </div>
          <div id="data" className="w-full h-5/6 flex">
            <div className="w-[70%] flex items-center p-2 flex-col">
              <div className="h-2/3 w-full">
                <ActivityGraph></ActivityGraph>
              </div>
            </div>
            <div className="w-[30%] p-4 h-full ml-auto">
              <ScrollBox children={children} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
