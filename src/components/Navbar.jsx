// import React from 'react'
import { useState } from 'react';
import Logo from "/public/1percent everyday.png"
import MainLogo from "/public/1percentLogo.png"

function Navbar() {
    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const toggleMenu = () => {
      console.log("clicked");
      setmenuIsOpen((prev) => !prev);
    };
  return (
    <div className='w-full h-[79px] bg-red-600 fixed flex items-center justify-between'>
        <nav className='flex w-full justify-between lg:justify-evenly items-center'>
        <div
        id="hamburgerMenu"
        onClick={toggleMenu}
        className="flex items-center ml-5 justify-between w-[4.3rem] sm:flex lg:hidden z-20 cursor-pointer"
      >
        <div className="w-7 h-5 flex flex-col justify-evenly">
          <span
            className={`w-full h-[2px] rounded-2xl  bg-white block transition-all ${
              !menuIsOpen
                ? "menu"
                : "-rotate-45 translate-y-[6px] translate-x-[1px]"
            }`}
          ></span>
          <span
            className={` h-[2px] rounded-2xl border-white bg-white block ${
              !menuIsOpen ? "w-2/3" : "w-0"
            }`}
          ></span>
          <span
            className={`w-1/2 h-[2px] rounded-2xl border-white bg-white block transition-all ${
              !menuIsOpen
                ? "menu"
                : "rotate-45 w-[100%] -translate-y-1.5 translate-x-[1px]"
            }`}
          ></span>
        </div>
      </div>
            <img src={Logo} alt=""/>
            <ul
            className={`bg-white lg:bg-transparent transition-all absolute lg:static top-0 left-0 w-52 lg:w-fit z-20 h-screen  lg:h-fit flex flex-col items-start py-10 lg:py-0 lg:flex-row capitalize font-Truculenta font-semibold text-xl lg:text-base lg:items-center ${
            !menuIsOpen ? "left-[-100%]" : "left-0"
            }`}
                >
                <img className="w-[70px] md:hidden ml-[19px] " src={MainLogo} alt="1percent logo" />
                <div className='flex ml-2 my-3 md:hidden py-1 px-1 items-center border border-[#E91212]'>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.125 13.625L16.5 17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 8.75C15 5.02208 11.978 2 8.25 2C4.52208 2 1.5 5.02208 1.5 8.75C1.5 12.478 4.52208 15.5 8.25 15.5C11.978 15.5 15 12.478 15 8.75Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                    <input className='placeholder:text-black outline-none' placeholder='Search' type="text" />
                </div>
                <li className="w-full lg:w-fit py-2 px-5 lg:px-3 xl:px-4 text-black  lg:text-white bg-transparent">home</li>
                <li className="w-full lg:w-fit py-2 px-5 lg:px-3 xl:px-4 text-black  lg:text-white bg-transparent">
                collection
                </li>
                <li className="w-full lg:w-fit py-2 px-5 lg:px-3 xl:px-4 text-black  lg:text-white bg-transparent">
                shirt
                </li>
                <li className="w-full lg:w-fit py-2 px-5 lg:px-3 xl:px-4 text-black  lg:text-white bg-transparent">
                caps
                </li>
                <li className="w-full lg:w-fit py-2 px-5 lg:px-3 xl:px-4 text-black  lg:text-white bg-transparent">
                contact us
                </li>
            </ul>            
            <div className='w-[57px] h-fit mr-5 flex justify-between items-center'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L21.0524 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M13.6418 14.4418C14.8486 13.7108 15.9018 14.0054 16.5345 14.4747C16.794 14.6671 16.9237 14.7633 17 14.7633C17.0763 14.7633 17.206 14.6671 17.4655 14.4747C18.0982 14.0054 19.1514 13.7108 20.3582 14.4418C21.9419 15.4013 22.3002 18.5666 18.6472 21.237C17.9514 21.7457 17.6035 22 17 22C16.3965 22 16.0486 21.7457 15.3528 21.237C11.6998 18.5666 12.0581 15.4013 13.6418 14.4418Z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5" stroke="white" strokeWidth="1.5"/>
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.06164 15.1933L3.42688 13.1219C3.85856 10.6736 4.0744 9.44952 4.92914 8.72476C5.78389 8 7.01171 8 9.46734 8H14.5327C16.9883 8 18.2161 8 19.0709 8.72476C19.9256 9.44952 20.1414 10.6736 20.5731 13.1219L20.9384 15.1933C21.5357 18.5811 21.8344 20.275 20.9147 21.3875C19.995 22.5 18.2959 22.5 14.8979 22.5H9.1021C5.70406 22.5 4.00504 22.5 3.08533 21.3875C2.16562 20.275 2.4643 18.5811 3.06164 15.1933Z" stroke="white" strokeWidth="1.5"/>
                    <path d="M7.5 8L7.66782 5.98618C7.85558 3.73306 9.73907 2 12 2C14.2609 2 16.1444 3.73306 16.3322 5.98618L16.5 8" stroke="white" strokeWidth="1.5"/>
                    <path d="M15 11C14.87 12.4131 13.5657 13.5 12 13.5C10.4343 13.5 9.13002 12.4131 9 11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar