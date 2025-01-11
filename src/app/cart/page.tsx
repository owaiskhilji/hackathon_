import React from 'react';
import { MdOutlineDeleteForever } from "react-icons/md"
import Image from "next/image";
import img1 from "../../../public/assestsHome/image8.png";
import img2 from "../../../public/assestsHome/Framea8.png";
import img3 from "../../../public/assestsHome/Framea6.png";

function Page() {
  return (
<div>
<h1 className="font-extrabold text-xl md:text-4xl ml-32 mt-10">YOUR CART</h1>
<div className="flex flex-col justify-center md:flex md:flex-row md:justify-evenly md:w-[1400px]">

      <div className='w-80 mx-auto md:h-[500px] md:w-[600px]'>
        <div
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] px-6  rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
        >
          <div className="flex flex-col md:flex md:flex-col mt-8 space-y-4">


          {/* <div
              className="flex flex-wrap items-center cursor-pointer rounded-lg w-full md:h-32 p-4"
            >
              <Image src={img1} alt="login-image" className="w-24 md:w-24 h-24 md:h-24"/>
              <div className="ml-4 flex-1">
                <p className="text-sm md:text-lg text-gray-800 font-bold">Gradient Graphic T-shirt</p>
                <p className="text-xs  text-gray-500 mt-0.5">Size: Large</p>
                <p className="text-xs  text-gray-500 mt-0.5 font-bold">Color : White</p>
                <p className="text-sm md:text-lg mt-0.5 font-bold">$145</p></div>
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
      </div> */}



<div
              className="flex flex-wrap items-center cursor-pointer rounded-lg w-full md:h-32 p-4"
            >

            <div className='flex'>
              <Image src={img1} alt="login-image" className="w-24 md:w-24 h-24 md:h-24"/>
              <div className="ml-4 flex-1">
                <p className="text-sm md:text-lg text-gray-800 font-bold">T-shirt</p>
                <p className="text-xs  text-gray-500 mt-0.5">Size: Large</p>
                <p className="text-xs  text-gray-500 mt-0.5 font-bold">Color : White</p>
                <p className="text-sm md:text-lg mt-0.5 font-bold">$145</p>
                </div>
                </div>
                
                <div className='flex justify-between md:block w-32 md:w-0  mt-4 md:mt-0 md:relative md:left-36' >
                <div >
                <p className="md:ml-36 md:relative md:bottom-6">
              <MdOutlineDeleteForever size={25}/>
                </p>
                </div >
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

            <div className='flex'>
              <Image src={img2} alt="login-image" className="w-24 md:w-24 h-24 md:h-24"/>
              <div className="ml-4 flex-1">
                <p className="text-sm md:text-lg text-gray-800 font-bold">Checkered shirt</p>
                <p className="text-xs  text-gray-500 mt-0.5">Size: Medium</p>
                <p className="text-xs  text-gray-500 mt-0.5 font-bold">Color : Red</p>
                <p className="text-sm md:text-lg mt-0.5 font-bold">$180</p>
                </div>
                </div>
                
                <div className='flex justify-between md:block w-32 md:w-0  mt-4 md:mt-0 md:relative md:left-20' >
                <div >
                <p className="md:ml-36 md:relative md:bottom-6">
              <MdOutlineDeleteForever size={25}/>
                </p>
                </div >
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

            <div className='flex'>
              <Image src={img3} alt="login-image" className="w-24 md:w-24 h-24 md:h-24"/>
              <div className="ml-4 flex-1">
                <p className="text-sm md:text-lg text-gray-800 font-bold">Skinny Fit Jeans</p>
                <p className="text-xs  text-gray-500 mt-0.5">Size: Large</p>
                <p className="text-xs  text-gray-500 mt-0.5 font-bold">Color : Blue</p>
                <p className="text-sm md:text-lg mt-0.5 font-bold">$240</p>
                </div>
                </div>
                
                <div className='flex justify-between md:block w-32 md:w-0  mt-4 md:mt-0 md:relative md:left-20' >
                <div >
                <p className="md:ml-36 md:relative md:bottom-6">
              <MdOutlineDeleteForever size={25}/>
                </p>
                </div >
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

<div className="mx-auto md:mx-auto-none mt-4 md:mt-0 w-72 md:w-96 md:h-[1200px]">

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
          className="flex-1 w-32 text-sm px-4 py-2 border bg-stone-300 rounded-full focus:outline-none"
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
</div>
);
}

export default Page;
