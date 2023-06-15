import React from "react";
import photo from "../assests/photo.jpg";

import { BiUserCircle } from "react-icons/bi";
// import {AiOutlineUser} from "react-icons/ai"
const Body = () => {
  return (
    <div>
      <div className="w-[280px] h-[670px] bg-green-500 border-[0px] rounded-xl">
        <div className="flex m-1 gap-4 ">
          <div className=" ml-3 mt-3 flex gap-3 ">
            <img
              src={photo}
              alt="pp"
              className="w-[40px] h-[40px] rounded-full "
            />
            <div className="flex flex-col justify-start ">
              <h1 className="font-semibold text-base">Parbat Chhetri</h1>
              <h1 className="font-semibold text-base">@parbatchhetri9361</h1>
              <h1 className="text-blue-600 font-medium text-sm mt-1">
                Manage your Google Account
              </h1>
            </div>
          </div>
        </div>
        <hr className="border-[1px]  bg-red-500  mt-3"></hr>
        
       
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
        </div>
        <hr className="border-[1px] w-[260px] bg-red-500 mt-3 "></hr>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
        </div>
        <hr className="border-[1px] w-[260px]  bg-red-500 mt-3 "></hr>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
        </div>
        <hr className="border-[1px] w-[260px]  bg-red-500 mt-3 "></hr>
        <div className="flex items-center gap-3 m-4 ">
          <BiUserCircle className="text-2xl" />
          <h1 className="font-semibold text-base">Your Channel</h1>
        </div>
        <hr className=" w-[260px] border-[1px]  bg-red-500 mt-5 "></hr>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-3 ml-4 mt-1">
            <BiUserCircle className="text-2xl" />
            <h1 className="font-semibold text-base">Your Channel</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 ml-4 mt-1">
          <BiUserCircle className="text-2xl" />
          <h1 className="font-semibold text-base">Your Channel</h1>
        </div>
       </div>
      
    </div>
  );
};

export default Body;
