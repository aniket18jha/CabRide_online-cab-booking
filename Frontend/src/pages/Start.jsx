import React from "react";
import uberlogo from "../images/uberlogo.png";
import homeimage from "../images/homePage.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="h-screen pt-8 flex justify-between flex-col w-full bg-red-400 ">
        <img className="w-16 ml-8" src={uberlogo} />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bolds">Get Started With Uber</h2>
          <Link
            to="/login"
            className="flex item-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
