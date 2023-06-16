import React from 'react'
import Header from "./Header";
import Sidebar from './Sidebar';
import{MdFilterList} from "react-icons/md"
import Data1 from "./Data1";
import { Link } from 'react-router-dom';
 export const Secondpart = () => {
  return (
    <div>
        <Header/>
        <div className='flex'>
        <Sidebar/>
        <Center />
        </div>
        
    </div>
  )
}

 function Center (){
   return(
   <div>
    <div className='flex items-center gap-1 ml-24 mt-2 w-[90px] h-[30px] rounded-2xl  cursor-pointer hover:bg-slate-400'>
        <MdFilterList className='text-xl ml-2'/>
        <h1 className='text-lg font-semibold'> Filters </h1>
    </div>
    <hr className='border-[(0.5)px] w-[1100px] ml-24 mt-2 border-black'></hr>

    <div className=" ml-24">
        {Data1.map((item, index) => (
           <Link to='/playvideo'>
          <div key={index} className="shrink-0 w-[850px] h-[180px] bg-gray-100 rounded-xl mt-8 flex   hover:scale-105 cursor-pointer hover:bg-slate-300 duration-200">
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

   </div>
   ) 
 }