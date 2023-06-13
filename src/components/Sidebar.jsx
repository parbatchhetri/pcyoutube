import React from "react";
import { AiFillHome,AiOutlineLike, AiOutlineVideoCameraAdd  } from "react-icons/ai";
import {MdSubscriptions,MdVideoLibrary,MdOutlineWatchLater, } from "react-icons/md";
import {RiHistoryLine,RiVideoLine} from "react-icons/ri";
import {BsChevronDown} from "react-icons/bs"
import { Scrollbars } from 'react-custom-scrollbars-2';
const Sidebar = () => {
  return (
    <div className=" ">
    <Scrollbars style={{ width: 300,  }} >
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7 p-3">
        <AiFillHome className="text-2xl" />
        <h1 className="text-base font-semibold ">Home</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <AiOutlineVideoCameraAdd    className="text-2xl" />
        <h1 className="text-base font-semibold ">Shorts</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <MdSubscriptions className="text-2xl" />
        <h1 className="text-base font-semibold ">Subscriptions</h1>
      </div>
      <hr className="w-[230px] my-5 ml-3 border-[1px]"></hr>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <MdVideoLibrary className="text-2xl" />
        <h1 className="text-base font-semibold ">Library</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <RiHistoryLine className="text-2xl" />
        <h1 className="text-base font-semibold ">History</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <RiVideoLine className="text-2xl" />
        <h1 className="text-base font-semibold ">Your videos</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <MdOutlineWatchLater className="text-2xl" />
        <h1 className="text-base font-semibold ">Watch later</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <AiOutlineLike className="text-2xl" />
        <h1 className="text-base font-semibold ">Liked Videos</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <BsChevronDown className="text-2xl" />
        <h1 className="text-base font-semibold ">Show more</h1>
      </div>
      <hr className='w-[230px] my-5 ml-3 border-[1px]'></hr>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <BsChevronDown className="text-2xl" />
        <h1 className="text-base font-semibold ">Show more</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <BsChevronDown className="text-2xl" />
        <h1 className="text-base font-semibold ">Show more</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <BsChevronDown className="text-2xl" />
        <h1 className="text-base font-semibold ">Show more</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <BsChevronDown className="text-2xl" />
        <h1 className="text-base font-semibold ">Show more</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-3">
        <BsChevronDown className="text-2xl" />
        <h1 className="text-base font-semibold ">Show more</h1>
      </div>
      </Scrollbars>
    </div>
  );
};

export default Sidebar;
