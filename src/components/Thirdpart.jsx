import React from "react";
import Header from "./Header";
import { FiBellOff } from "react-icons/fi";
import { BsChevronDown,BsThreeDots } from "react-icons/bs";
import { AiOutlineLike, AiOutlineDislike,AiOutlineScissor } from "react-icons/ai";
import {RiShareForwardLine} from "react-icons/ri"
import {MdPlaylistAdd} from "react-icons/md"
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
        <div className="w-[1000px] h-[550px] bg-red-600 "></div>
        <h1 className="font-semibold text-lg">
          Hello Welcome to my Vlog | Flying Beast | Enjoy Guys!
        </h1>

        <div className="flex gap-48">
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

function Sidepart(){
    return(
        <div>
           {Data1.map((item, index) => (
           <Link to='/playvideo'>
          <div key={index} className="shrink-0 w-[400px] h-[180px] bg-gray-100 rounded-xl mt-4 flex ml-5   hover:scale-105 cursor-pointer hover:bg-slate-300 duration-200">
            <div>
              <img src={item.image} alt="pp" className="shrink-0 w-[350px] h-[180px] rounded-xl " />
            </div>
            <div className='mt-3 ml-3'>
                <p className='font-semibold text-base'>{item.title}|{item.title1}|{item.id}</p>
                <p className='font-bold '>{item.Views}{" views  "}.{" "}{item.time}</p>
                <div className='flex items-center shrink-0 object-contain mt-3 gap-2  '>
                    <img src={item.image} alt='pp' className='w-[25px] h-[25px] rounded-full'/>
                    <h1 className='font-semibold text-sm'>{item.id}</h1>
                     </div>
                     <p className='text-xs font-sans mt-3'>{item.desc}</p>
                </div>
               
           
          </div>
          </Link>
        ))}  
        </div>
    )
}
