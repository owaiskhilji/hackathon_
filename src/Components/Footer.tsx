import React from 'react'
import Image from "next/image";
import twit from "../../public/footerimage/twitter.png"
import you from "../../public/footerimage/youtube.png"
import fb from "../../public/footerimage/facebook-.png"
import ista from "../../public/footerimage/instagram.webp"
export default function Footer() {
  return (
<div >

<div className=" block px-20 py-14 space-y-5 md:flex md:justify-between items-center border-2 mx-auto rounded-2xl w-64 md:w-[1300px] md:h-[200px]  bg-black">
    <div className="font-bold text-2xl md:text-4xl text-white md:w-[600px]">
      STAY UPTO DATE ABOUT OUR LATEST OFFERS
    </div>
    <div className="space-y-4">
      <label className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 w-full max-w-[300px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="text"
          className="text-center w-full text-sm outline-none"
          placeholder="Enter your email address"
        />
      </label>
      <input
        type="text"
        placeholder="Subscribe to Newsletter"
        className="text-center text-sm rounded-full border px-4 py-2 w-full max-w-[300px]"
      />
    </div>
</div>



<footer className="font-sans tracking-wide bg-gray-300 px-10 py-20">
    <div className="flex flex-wrap justify-between gap-10">
      <div className="max-w-md">
        <a href="javascript:void(0)">
          <h1 className='font-bold text-2xl'>shop.co</h1>
        </a>
        <div className="mt-6">
        <p className="text-gray-600 leading-relaxed text-sm w-72">We have clothes that suit you style and which you&apos;re proud to wear From women to men</p>
        </div>
        <ul className="mt-10 flex space-x-5">
          <li>
            <a href="javascript:void(0)">
            <Image className="border-spacing-10" src={twit} alt="twitter" width={30} height={20} />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
            <Image src={you} alt="youtube" width={30} height={20} />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
            <Image src={fb} alt="FB" width={30} height={20} />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
            <Image src={ista} alt="Istagram" width={30} height={20} />
            </a>
          </li>
        </ul>
      </div>

      <div className="max-lg:min-w-[140px]">
        <h4 className="text-gray-800 font-bold text-base relative max-sm:cursor-pointer">COMPANY</h4>

        <ul className="mt-6 space-y-4">
          <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Web Development</a></li>
          <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Pricing</a></li>
          <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Support</a></li>
          <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Client Portal</a></li>
          
        </ul>
      </div>

      <div className="max-lg:min-w-[140px]">
        <h4 className="text-gray-800 font-bold text-base relative max-sm:cursor-pointer">HELP</h4>
        <ul className="space-y-4 mt-6">
          <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Hubspot</a></li>
          <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Integration Services</a></li>
          <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Marketing Glossar</a></li>
          <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">UIPath</a></li>
        </ul>
      </div>

      <div className="max-lg:min-w-[140px]">
        <h4 className="text-gray-800 font-bold text-base relative max-sm:cursor-pointer">FAQ</h4>

        <ul className="space-y-4 mt-6">
          <li><a href="javascript:void(0)"  className="hover:text-gray-800 text-gray-600 text-sm">About us</a></li>
          <li> <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Careers</a></li>
          <li><a href="javascript:void(0)"  className="hover:text-gray-800 text-gray-600 text-sm">Blog</a></li>
          <li><a href="javascript:void(0)"  className="hover:text-gray-800 text-gray-600 text-sm">Portfolio</a></li>
        
        </ul>
      </div>

      <div className="max-lg:min-w-[140px]">
        <h4 className="text-gray-800 font-bold text-base relative max-sm:cursor-pointer">RESOURCES</h4>

        <ul className="space-y-4 mt-6">
          <li>
            <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">FAQ</a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Partners</a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Sitemap</a>
          </li>
          <li>
            <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Contact</a>
          </li>
         
        </ul>
      </div>
    </div>

    <hr className="mt-10 mb-6 border-gray-300" />

    <div className="flex flex-wrap max-md:flex-col gap-4">
      <p className="text-gray-600 text-sm">shop.co © 2000-2023 All Right Reserved</p>
      <ul className="md:flex md:space-x-6 max-md:space-y-2 md:ml-auto">
        <li>
        {/* <Image src={Image1} alt="" width={300}/>  */}
        </li>
      </ul>

    </div>
  </footer>
 
   </div> 
 )
}