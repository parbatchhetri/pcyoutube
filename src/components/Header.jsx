import React, { useState } from "react";
import { AiOutlineMenu, AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import photo from "../assests/photo.jpg";
import Body from "./Body";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  function clickHandler() {
    setShow(!show);
  }

  return (
    <div className="flex items-center gap-56 justify-between p-5 ">
      <div className="flex items-center  gap-5">
        <AiOutlineMenu className="text-xl cursor-pointer hover:scale-105 hover:bg-slate-400 rounded-full duration-200 min-w-[40px] min-h-[40px] p-2" />
        <div className="flex ">
          <AiFillYoutube className="text-3xl text-red-600 " />
          <h1 className="text-xl font-semibold cursor-pointer">
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
          <Link to="/search"> <div className="py-3 px-6 bg-gray-200 rounded-r-3xl flex items-center cursor-pointer">
            <AiOutlineSearch className="text-xl" />
          </div></Link>
        </div>

        <BsFillMicFill className="text-xl cursor-pointer hover:scale-105 hover:bg-slate-400 rounded-full duration-200 min-w-[40px] min-h-[40px] p-2" />
      </div>
      <div className="flex items-center gap-5">
        <BiVideoPlus className="text-2xl cursor-pointer" />
        <IoIosNotificationsOutline className="text-2xl cursor-pointer"></IoIosNotificationsOutline>
        <img
          src={photo}
          onClick={clickHandler}
          alt="pp"
          className="rounded-full w-[35px] h-[35px] cursor-pointer"
        />
      </div>
      {show && (
        <div className="absolute top-[5px] right-[65px]">
          <Body />
        </div>
      )}
    </div>
  );
};

export default Header;
