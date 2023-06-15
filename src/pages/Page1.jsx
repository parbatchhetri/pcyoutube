import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Middle from '../components/Middle';
const Page1 = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <Header />
          <div className="flex">
            <Sidebar />
            <Middle />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Page1;
