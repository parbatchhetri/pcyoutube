import React from "react";
import { AiFillHome,AiOutlineLike, AiOutlineVideoCameraAdd  } from "react-icons/ai";
import {MdSubscriptions,MdVideoLibrary,MdOutlineWatchLater, } from "react-icons/md";
import {RiHistoryLine,RiVideoLine} from "react-icons/ri";
import {BsChevronDown} from "react-icons/bs"
import photo2 from "../assests/photo2.jpg"
import photo1 from "../assests/photo1.jpg"
import photo3 from "../assests/photo3.jpg"
import photo4 from "../assests/photo4.jpg"
import photo5 from "../assests/photo5.jpg"
const Sidebar = () => {
  return (
    <div className=" ">
    <div class=" snap-x snap-proximity h-[700px] overflow-auto scrollbar-hidden scroll-smooth ">
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7 p-2">
        <AiFillHome className="text-2xl" />
        <h1 className="text-base font-semibold ">Home</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
        <AiOutlineVideoCameraAdd    className="text-2xl" />
        <h1 className="text-base font-semibold ">Shorts</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
        <MdSubscriptions className="text-2xl" />
        <h1 className="text-base font-semibold ">Subscriptions</h1>
      </div>
      <hr className="w-[230px] my-3 ml-3 border-[1px]"></hr>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
        <MdVideoLibrary className="text-2xl" />
        <h1 className="text-base font-semibold ">Library</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
        <RiHistoryLine className="text-2xl" />
        <h1 className="text-base font-semibold ">History</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
        <RiVideoLine className="text-2xl" />
        <h1 className="text-base font-semibold ">Your videos</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
        <MdOutlineWatchLater className="text-2xl" />
        <h1 className="text-base font-semibold ">Watch later</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
        <AiOutlineLike className="text-2xl" />
        <h1 className="text-base font-semibold ">Liked Videos</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
        <BsChevronDown className="text-2xl" />
        <h1 className="text-base font-semibold ">Show more</h1>
      </div>
      <hr className='w-[230px] my-3 ml-3 border-[1px]'></hr>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
       <h1 className="text-lg font-semibold ">Subscriptions</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
      <img src={photo3}  alt="pp"className="shrink-0 w-[30px] h-[30px] rounded-full "/>
        <h1 className="text-base font-semibold ">Flying beast</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
      <img src={photo5}  alt="pp"className="shrink-0 w-[30px] h-[30px] rounded-full "/>    
          <h1 className="text-base font-semibold ">Soul Regaltos</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
      <img src={photo1}  alt="pp"className="shrink-0 w-[30px] h-[30px] rounded-full "/>  
            <h1 className="text-base font-semibold ">T-series</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
      <img src={photo4}  alt="pp"className="shrink-0 w-[30px] h-[30px] rounded-full "/>  
            <h1 className="text-base font-semibold ">NetFlix</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
      <img src={photo2}  alt="pp"className="shrink-0 w-[30px] h-[30px] rounded-full "/>  
            <h1 className="text-base font-semibold ">Bhajan Song</h1>
      </div>
      <div className="flex hover:bg-slate-400 hover:scale-105 cursor-pointer duration-200 rounded-xl items-center ml-4 gap-7  p-2">
        <BsChevronDown className="text-2xl" />
        <h1 className="text-base font-semibold ">Show 27 more</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
