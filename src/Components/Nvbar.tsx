import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiSearchFill } from "react-icons/ri";

export default function Nvbar() {
  return (

<div className="main navbar bg-white shadow-md border-b-2 w-full ">
      <div className="flex-1 ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-1">
        <li>
          <a>Shop</a>
          <ul className="p-2 ">
          <li><a href={"/"}>Home</a></li>
          <li><a href={"/productdetail"}>Product detail</a></li>
            <li><a href={"/cetegary"}>Category</a></li>
            <li><a href={"/cart"}>Cart</a></li>
          </ul>
        </li>
        <li><a>On Sale</a></li>
      <li><a>New Arrivals</a></li>
      <li><a>Brands</a></li>
      </ul>
        </div>
        <a className="flex justify-end font-extrabold text-xl md:text-2xl text-black">SHOP.CO</a>
      </div>

      <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 relation right-20">
      <li>
        <details>
          <summary>Shop</summary>
          <ul className="p-2">
            <li><a href={"/"}>Home</a></li>
            <li><a href={"/productdetail"}>Product detail</a></li>
            <li><a href={"/cetegary"}>Category</a></li>
            <li><a href={"/cart"}>Cart</a></li>
          </ul>
        </details>
      </li>
      <li><a>On Sale</a></li>
      <li><a>New Arrivals</a></li>
      <li><a>Brands</a></li>
    </ul>
  </div>
      <div className="ser-div flex items-center gap-4 ">
        <div className="Inp hidden md:flex items-center  px-2">
          <RiSearchFill size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[400px] md:w-[600px] border-0 h-5 focus:outline-none"
          />
        </div>

        <ul className="flex items-center md:space-x-4 ">
          <li className="block sm:hidden w-4 h-4 mr-3">
            <IoIosSearch size={25}/>
          </li>
          <li className="w-4 h-4 md:w-full md:h-full mr-3">
            <MdOutlineShoppingCart size={25}/>
          </li>
          <li className="w-4 h-4 md:w-full md:h-full">
            <CgProfile size={25}/>
          </li>
        </ul>
      </div>
      </div>
  );
}
