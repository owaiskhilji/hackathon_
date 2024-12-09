import React from 'react';
import { MdOutlineDeleteForever } from "react-icons/md"
import Image from "next/image";
import img1 from "../../../public/assestsHome/image8.png";
import img2 from "../../../public/assestsHome/Framea8.png";
import img3 from "../../../public/assestsHome/Framea6.png";

function Page() {
  return (
<>
<h1 className="font-extrabold text-xl md:text-4xl ml-32 mt-10">YOUR CART</h1>
<div className="flex flex-col justify-center md:flex md:flex-row md:justify-evenly  mt-6">

      <div>
        <div
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] px-6 w-96 md:h-[500px] md:w-[600px] rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
        >
          <div className="mt-8 space-y-4">
            <div
              className="flex flex-wrap items-center cursor-pointer rounded-lg w-full md:h-32 p-4"
            >
              <Image src={img1} alt="login-image" className="w-24 md:w-24 h-24 md:h-24" />
              <div className="ml-4 flex-1">
                <p className="text-sm md:text-lg text-gray-800 font-bold">Gradient Graphic T-shirt</p>
                <p className="text-xs  text-gray-500 mt-0.5">Size: Large</p>
                <p className="text-xs  text-gray-500 mt-0.5 font-bold">Color : White</p>
                <p className="text-sm md:text-lg mt-0.5 font-bold">$145</p>
              </div>

              <div >
                <p className="md:ml-24 relative left-12 bottom-5 md:relative md:bottom-6">
              <MdOutlineDeleteForever size={25}/>
                </p>
              <div className="join join-horizontal lg:join-horizontal md:ml-28  md:relative md:top-5">
  <button className="btn btn-xs join-item font-bold">-</button>
  <button className="btn btn-xs join-item font-bold">1</button>
  <button className="btn btn-xs join-item font-bold">+</button>
</div>
</div>
            </div>
            <hr className="w-full" />
            <div
              className="flex flex-wrap items-center cursor-pointer rounded-lg w-full md:h-32 p-4"
            >
              <Image src={img2} alt="login-image" className="w-24 md:w-24 h-24 md:h-24"/>
              <div className="ml-4 flex-1">
                <p className="text-sm md:text-lg text-gray-800 font-bold">Checkered shirt</p>
                <p className="text-xs  text-gray-500 mt-0.5">Size: Medium</p>
                <p className="text-xs  text-gray-500 mt-0.5 font-bold">Color : Red</p>
                <p className="text-sm md:text-lg mt-0.5 font-bold">$180</p></div>
                <div >
                <p className="md:ml-24 relative left-12 bottom-5 md:relative md:bottom-6">
              <MdOutlineDeleteForever size={25}/>
                </p>
              <div className="join join-horizontal lg:join-horizontal md:ml-28  md:relative md:top-5">
  <button className="btn btn-xs join-item font-bold">-</button>
  <button className="btn btn-xs join-item font-bold">1</button>
  <button className="btn btn-xs join-item font-bold">+</button>
</div>
</div>
      </div>
<hr className="w-full" />
            <div
              className="flex flex-wrap items-center cursor-pointer w-full md:h-32 p-4"
            >
              <Image src={img3} alt="login-image" className="w-24 md:w-24 h-24 md:h-24" />
              <div className="ml-4 flex-1">
                <p className="text-sm md:text-lg text-gray-800 font-bold">Skinny Fit Jeans</p>
                <p className="text-xs  text-gray-500 mt-0.5">Size: Large</p>
                <p className="text-xs  text-gray-500 mt-0.5 font-bold">Color : Blue</p>
                <p className="text-sm md:text-lg mt-0.5 font-bold">$240</p></div>
                <div >
                <p className="md:ml-24 relative left-12 bottom-5 md:relative md:bottom-6">
              <MdOutlineDeleteForever size={25}/>
                </p>
              <div className="join join-horizontal lg:join-horizontal md:ml-28  md:relative md:top-5">
  <button className="btn btn-xs join-item font-bold">-</button>
  <button className="btn btn-xs join-item font-bold">1</button>
  <button className="btn btn-xs join-item font-bold">+</button>
</div>
</div>
            </div>
          </div>
        </div>
      </div>

<div className="mt-4 md:mt-0">

      <div className="max-w-sm md:max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>$565</span>
      </div>
      <div className="flex justify-between mb-2 text-red-500">
        <span>Discount (-20%)</span>
        <span>-$113</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Delivery Fee</span>
        <span>$15</span>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between mb-4 font-bold text-lg">
        <span>Total</span>
        <span>$467</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Add promo code"
          className="flex-1 px-4 py-2 border bg-stone-300 rounded-full focus:outline-none"
        />
        <button className="px-4 py-2 bg-gray-900 text-white rounded-full">
          Apply
        </button>
      </div>
      <button className="w-full py-3 bg-black text-white rounded-full">
        Go to Checkout →
      </button>
    </div>
    </div>


    </div>
</>
);
}

export default Page;
