import React from "react";
import { AiFillHome,AiOutlineLike, AiOutlineVideoCameraAdd  } from "react-icons/ai";
import {MdSubscriptions,MdVideoLibrary,MdOutlineWatchLater, } from "react-icons/md";
import {RiHistoryLine,RiVideoLine} from "react-icons/ri";
import {BsChevronDown} from "react-icons/bs"
const Sidebar = () => {
  return (
    <div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-lg items-center ml-5 gap-7 mt-3">
        <AiFillHome className="text-2xl" />
        <h1 className="text-base font-semibold ">Home</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-lg items-center ml-5 gap-7 mt-5">
        <AiOutlineVideoCameraAdd    className="text-2xl" />
        <h1 className="text-base font-semibold ">Shorts</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-lg items-center ml-5 gap-7 mt-5">
        <MdSubscriptions className="text-2xl" />
        <h1 className="text-base font-semibold ">Subscriptions</h1>
      </div>
      <hr className="w-[230px] my-5 ml-3 border-[1px]"></hr>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-lg items-center ml-5 gap-7 mt-5">
        <MdVideoLibrary className="text-2xl" />
        <h1 className="text-base font-semibold ">Library</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-lg items-center ml-5 gap-7 mt-5">
        <RiHistoryLine className="text-2xl" />
        <h1 className="text-base font-semibold ">History</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-lg items-center ml-5 gap-7 mt-5">
        <RiVideoLine className="text-2xl" />
        <h1 className="text-base font-semibold ">Your videos</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-lg items-center ml-5 gap-7 mt-5">
        <MdOutlineWatchLater className="text-2xl" />
        <h1 className="text-base font-semibold ">Watch later</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-lg items-center ml-5 gap-7 mt-5">
        <AiOutlineLike className="text-2xl" />
        <h1 className="text-base font-semibold ">Liked Videos</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-lg items-center ml-5 gap-7 mt-5">
        <BsChevronDown className="text-2xl" />
        <h1 className="text-base font-semibold ">Show more</h1>
      </div>
      <hr className='w-[230px] my-5 ml-3 border-[1px]'></hr>
    </div>
  );
};

export default Sidebar;
