import React from "react";
import {
  FaWallet,
  FaRegMoneyBillAlt,
  FaCreditCard,
  FaCoins,
} from "react-icons/fa";

const AmountBox = ({type, amount }) => {
  const logos = {
    Balance: (
      <FaWallet
        className="w-1/2
            h-1/2"
            fill="#1FCB4f"
      ></FaWallet>
    ),
    Income: (
      <FaRegMoneyBillAlt
        className="w-1/2
            h-1/2"
            fill="#1FCB4f"
      ></FaRegMoneyBillAlt>
    ),
    Expenses: (
      <FaCreditCard
        className="w-1/2
            h-1/2"
            fill="#1FCB4f"
      ></FaCreditCard>
    ),
    Savings: (
      <FaCoins
        className="w-1/2
            h-1/2"
            fill="#1FCB4f"
      ></FaCoins>
    ),
  };

  return (
    <>
      <div
        id="amount-box"
        className="
            flex
            w-full
            h-full
            bg-[#1A1C22]
            rounded-3xl"
      >
        <div
          id="amount-box-left"
          className="
          flex
          items-center
            justify-center
            w-1/3
            h-full
        "
        >
          <div className="w-3/5 h-2/5 flex items-center justify-center bg-[#282C35] rounded-3xl">
            {logos[type]}
          </div>
        </div>
        <div
          id="amount-box-right"
          className="
            flex
            flex-col
            justify-center
            items-center
            w-2/3
            h-full
        "
        >
          <div
            id="amount-box-type"
            className="
            h-1/2
            w-full
            flex
            flex-col
            items-start
            justify-center
            pl-1
            "
          >
            <p className="text-[#9E9E9E] text-lg">{type}</p>
          </div>
          <div
            id="amount-box-amount"
            className="
            h-1/2
            w-full
            flex
            flex-col
            items-start
            justify-start
            "
          >
            <p className="text-2xl">{"$" + amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmountBox;
