import React from 'react'
import Header from "./Header";
import Sidebar from './Sidebar';
import{MdFilterList} from "react-icons/md"

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
    <div className='flex items-center'>
        <MdFilterList className='text-xl'/>
        <h1 className='text-lg font-semibold'> Filter </h1>
    </div>

   </div>
   ) 
 }