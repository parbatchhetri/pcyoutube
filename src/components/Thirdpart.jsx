import React from "react";
import Header from "./Header";
import { FiBellOff } from "react-icons/fi";
import { BsChevronDown, BsThreeDots } from "react-icons/bs";
import {BiTimeFive} from "react-icons/bi";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineScissor,
} from "react-icons/ai";
import { RiShareForwardLine,RiMenuUnfoldFill } from "react-icons/ri";
import { MdPlaylistAdd } from "react-icons/md";
import photo3 from "../assests/photo3.jpg";
import Data1 from "./Data1";
import { Link } from "react-router-dom";
export const Thirdpart = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Video />
        <Sidepart />
      </div>
    </div>
  );
};

function Video() {
  return (
    <div>
      <div className="ml-20 flex flex-col gap-3">
        <div className="w-[950px] h-[550px] bg-red-600 ">
          <div className="">
            <iframe
              className="w-full  h-[550px]"
              src={`https://www.youtube.com/embed/F3OP1hduA-s`}
              title="YouTube Video Player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h1 className="font-semibold text-lg">
          Hello Welcome to my Vlog | Flying Beast | Enjoy Guys!
        </h1>

        <div className="flex gap-36">
          <div className="flex gap-3 cursor-pointer">
            <img
              src={photo3}
              alt="pp"
              className="rounded-full w-[35px] h-[35px]  "
            />
            <div>
              <h1 className="font-bold text-sm"> Flying Beast </h1>
              <p className="font-normal text-xs"> 15M subscribers </p>
            </div>
            <div className="flex ">
              <div className="w-[150px] h-[38px] rounded-3xl bg-gray-100 hover:bg-gray-300 cursor-pointer flex items-center gap-2 justify-center ml-5">
                <FiBellOff className="text-lg" />
                <p className="font-bold text-sm">Subscribed</p>
                <BsChevronDown className="text-lg mt-1 " />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-[120px] h-[38px] rounded-3xl bg-gray-100 hover:bg-gray-300 cursor-pointer flex items-center gap-2 justify-center">
              <AiOutlineLike className="text-xl" />{" "}
              <p className="font-semibold text-lg"> 70k </p>{" "}
              <p className="text-xl mb-1 font-thin">|</p>{" "}
              <AiOutlineDislike className="text-xl mt-1" />
            </div>
            <div className="w-[100px] h-[38px] rounded-3xl bg-gray-100 hover:bg-gray-300 cursor-pointer flex items-center gap-2 justify-center ml-3 ">
              <RiShareForwardLine className="text-xl" />{" "}
              <p className="font-semibold text-lg"> Share </p>{" "}
            </div>
            <div className="w-[80px] h-[38px] rounded-3xl bg-gray-100 hover:bg-gray-300 cursor-pointer flex items-center gap-1 justify-center ml-3">
              <AiOutlineScissor className="text-xl" />{" "}
              <p className="font-semibold text-lg"> Clip </p>{" "}
            </div>
            <div className="w-[100px] h-[38px] rounded-3xl bg-gray-100 hover:bg-gray-300 cursor-pointer flex items-center gap-2 justify-center ml-3">
              <MdPlaylistAdd className="text-xl" />{" "}
              <p className="font-semibold text-lg"> Save </p>{" "}
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer flex items-center gap-2 justify-center ml-3">
              <BsThreeDots className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidepart() {
  return (
    <div className="ml-3 ">

<div class="flex snap-x snap-proximity  overflow-auto scrollbar-hidden scroll-smooth w-[400px]">
      <div className="flex gap-2 ml-1 mt-2 ">
        <div className="shrink-0 w-[90px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">All</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Gaming</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Music</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Videos</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">News</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Mixes</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Comedy</h1>
        </div>
        <div className="shrink-0 w-[120px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Pubg Mobile</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Movies</h1>
        </div>
        <div className="shrink-0 w-[120px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Entertainment</h1>
        </div>
        <div className="shrink-0 w-[120px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Electronics</h1>
        </div>
        <div className="shrink-0 w-[140px] h-[30px] rounded-lg bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Sports and Games</h1>
        </div>
        </div>
        </div>

        {Data1.map((item, index) => (
  <Link to="/playvideo">
    <div
      key={index}
      className="w-[420px] h-[110px] bg-gray-100 rounded-xl mt-4 flex ml-1 cursor-pointer relative group"
    >
      <img
        src={item.image}
        alt="pp"
        className="object-cover min-w-[180px] h-[110px] rounded-xl"
      />

      <div className="bg-black w-7 h-7 absolute left-36 z-10 top-1 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <BiTimeFive className="text-white text-2xl" />
      </div>

      <div className="bg-black w-7 h-7 absolute left-36 z-10 top-9 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <RiMenuUnfoldFill className="text-white text-2xl" />
      </div>

      <div className="mt-1 ml-3">
        <p className="font-semibold text-base">
          {item.title}|{item.title1}|{item.id}
        </p>
        <h1 className="font-semibold text-sm">{item.id}</h1>
        <p className="font-medium">
          {item.Views} views. {item.time}
        </p>
      </div>
    </div>
  </Link>
))}

    
    </div>
 
  );
}
