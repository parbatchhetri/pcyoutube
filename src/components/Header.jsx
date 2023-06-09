import React from "react";
import { AiOutlineMenu, AiFillYoutube,AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import {BiVideoPlus} from "react-icons/bi"
import {IoIosNotificationsOutline} from "react-icons/io"
import photo from "../assests/photo.jpg"
const Header = () => {
  return (
    <div className="flex items-center gap-56 justify-between p-5 ">
      <div className="flex items-center  gap-5">
        <AiOutlineMenu className="text-2xl " />
        <div className="flex ">
          <AiFillYoutube className="text-3xl text-red-600 " />
          <h1 className="text-xl font-semibold">
            YouTube<sup className="font-normal">NP</sup>
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className=" rounded-3xl bg-white border-[1px] flex ">
          <input
            type="text"
            placeholder="Search"
            className="outline-none p-2 rounded-l-3xl pr-[400px]"
          ></input>
          <div className="py-2 px-6 bg-gray-200 rounded-r-3xl flex items-center">
            <AiOutlineSearch className="text-xl"/>
          </div>
        </div>

        <BsFillMicFill className="text-2xl" />
      </div>
<div className="flex items-center gap-5">
    <BiVideoPlus className="text-2xl"/>
    <IoIosNotificationsOutline className="text-2xl"></IoIosNotificationsOutline>
    <img src={photo} alt="pp" className="rounded-full w-[30px] h-[30px]"/>

</div>

    </div>
  );
};

export default Header;
