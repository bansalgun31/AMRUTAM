import React from "react";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
//import Collection from "./Collection";
//import PlayStore from "./PlayStore";
//import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header(){
    const [selectedMenu, setSelectedMenu] = useState(0);
  function handleClick(index) {
    setSelectedMenu(index);
  }
  const menuClass = "text-black";
  const activeMenuClass = "text-blue-500 border-b-2 border-blue-600";

  return (
    <div>
      <div className="bg-[#373636] text-white text-center flex flex-row    justify-between items-center h-[67px]">
        <p className="ml-[550px] h-[28px] text-[19px] ">
          Your first 5 minutes instant call is free.
        </p>
        <div className="bg-[#3A643B] ml-[100px] w-[25%] h-[51px] top-[8px] mr-[100px] rounded-[16px] ">
          <button className="text-center py-3">
            {" "}
            <CallIcon /> Try Instant Free Call Now{" "}
          </button>
        </div>
      </div>
      <div className="h-[147px]  bg-[#FFF7E2]">
        <a className="left-[30px]  " href="">
          <img
            className="mx-auto py-[5px]  h-[40px] w-[208px] "
            src="/images/logo.png"
            alt=""
          />
        </a>

        <div className="left-[20px] top-[32px] text-[#3A643C] text-[20px] flex flex-row h-[32px]">
          <div>
            <CallIcon />
          </div>
          <p className="">+91 9826352321</p>
        </div>
        <div className="flex">
          <div className="flex flex-row mx-auto ">
            <div className=" gap-8">
              <ul className="flex justify-evenly  text-[20px] gap-[40px]">
                <li>
                  <Link className="no-underline"  onClick={() => {
                      handleClick(0);
                    }}>
                    <p className={selectedMenu===0? activeMenuClass:menuClass}>Home</p>
                  </Link>
                </li>
                <li>
                  <Link className="no-underline"
                    onClick={() => {
                      handleClick(1);
                    }}
                  >
                    <p className={selectedMenu===1 ? activeMenuClass:menuClass}>
                      Find Doctors
                    </p>
                  </Link>
                </li>
                <li>
                  <Link className="no-underline"
                    onClick={() => {
                      handleClick(2);
                    }}
                  >
                    <p className={selectedMenu===2 ? activeMenuClass:menuClass}>Lab Tests</p>
                  </Link>
                </li>
                <li>
                  <Link className="no-underline"
                    onClick={() => {
                      handleClick(3) ;
                    }} to="/shop"
                  >
                    <p className={selectedMenu===3? activeMenuClass:menuClass}>Shop</p>
                  </Link>
                </li>
                <li>
                  <Link className="no-underline"
                    onClick={() => {
                      handleClick(4); 
                    }} to="/forum"
                  >
                    <p className={selectedMenu===4 ? activeMenuClass:menuClass}>Forum</p>
                  </Link>
                </li>
                <li>
                  <Link className="no-underline"
                    onClick={() => {
                      handleClick(5);
                    }}
                  >
                    <p className={selectedMenu===5? activeMenuClass:menuClass}>About Us</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-row justify-evenly gap-[24px]">
              <button className="h-[36px] w-[36px] p-[6px] rounded-full bg-[#D2D9D2]"></button>
              <button className="h-[36px] w-[36px] p-[6px] rounded-full bg-[#D2D9D2]"></button>
              <button className="h-[36px] w-[36px] p-[6px] rounded-full bg-[#D2D9D2]"></button>
              <button className="h-[36px] w-[36px] p-[6px] rounded-full bg-[#D2D9D2]"></button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pb-[50px]">
        <img
          className="object-cover !h-[202px] w-full "
          src="/images/bg.png"
          alt=""
        />
        <div className=" right-[50%] text-center top-[5%] absolute">
          <h1 className=" text-[36px] font-SemiBold text-[#333448] ">Store</h1>
        </div>
        <div className="w-[609px] absolute top-[50%] right-[30%] flex flex-row gap-3  h-[48px]">
          <div className="border-[2px] w-[539px] flex flex-row  items-center ">
            <SearchIcon />
            <input
              className=""
              type="text"
              placeholder="Search for Kuntal Care"
            />
          </div>
          <button className="w-[50px] h-[48px] border-[2px]">
            <LocalMallIcon />
          </button>
        </div>
      </div>
      
      </div>


        

    );
}
export default Header;