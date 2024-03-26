// import React from 'react'

// import Button from "../components/Button"
import Navbar from "../components/Navbar";

function Cart() {
  return (
    <div>
      <Navbar />
      <div className="pt-28 grid gap-4 place-items-center ">
        <div className="h-[5px] w-11/12 bg-gray-200 rounded overflow-hidden">
          <span
            className="block h-full bg-red-600"
            style={{ width: "10%" }}
          ></span>
        </div>
        <div className=" py-2 w-11/12 px-3 bg-red-600 flex justify-between items-center capitalize text-white font-Truculenta">
          <p>cart summary:</p>
          <p>$30</p>
        </div>
        <div className=" mx-5 flex items-center flex-row font-Truculenta capitalize gap-[14px]">
          <div className=" w-[128px] h-[136px] bg-slate-800"></div>
          <div className="gap-2 flex flex-col">
            <div className="flex items-center flex-row gap-[50px]">
              <p className="text-lg font-semibold">blank tee</p>
              <button className="capitalize flex items-center gap-2 text-white font-medium py-1 px-2 bg-red-600">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="#F8F8F8" />
                </svg>
                <p>remove</p>
              </button>
            </div>
            <div className="flex items-center flex-row gap-3">
              <p className="text-lg font-medium">color:</p>
              <p className="py-[1px] px-[4px] text-white bg-red-600">black</p>
            </div>
            <p className="text-base font-medium">$30</p>
            <div className="flex gap-20 items-center">
              <p className="text-base font-semibold">Qty:</p>
              <div className="flex gap-3 items-center">
                <button className="py-[14px] px-[6px] bg-red-600">
                  <svg
                    width="18"
                    height="2"
                    viewBox="0 0 18 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 0H1C0.734784 0 0.48043 0.105356 0.292893 0.292892C0.105357 0.480429 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H17C17.2652 2 17.5196 1.89464 17.7071 1.70711C17.8946 1.51957 18 1.26522 18 1C18 0.734784 17.8946 0.480429 17.7071 0.292892C17.5196 0.105356 17.2652 0 17 0Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <p className="font-Truculenta font-semibold">1</p>
                <button className="py-2 px-2 bg-red-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="#F8F8F8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
        <button className="text-xl capitalize font-Truculenta flex items-center gap-2 text-white font-semibold py-2 px-4 bg-red-600">
                <p>checkout:</p>
                <p>$30</p>
              </button>
        </div>
      </div>

      {/* <div className="pt-52  grid place-items-center gap-1">
            <p className="font-Truculenta text-3xl capitalize font-bold">cart is empty</p>
            <a href="/Home">
            <Button 
                text="go back to shop"
            />
            </a>
        </div> */}
    </div>
  );
}

export default Cart;
