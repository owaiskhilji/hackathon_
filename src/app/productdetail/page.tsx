import React from 'react'
import Image from "next/image";
import img from "../../../public/productDetail/image 1.png"
import img2 from "../../../public/productDetail/image 2.png"
import img3 from "../../../public/productDetail/image 5.png"
import img4 from "../../../public/productDetail/image 6.png"
import img5 from "../../../public/productDetail/Frame 11.png"
import img8 from "../../../public/productDetail/Frame 77.png"
import img9 from "../../../public/productDetail/Frame 17.png"
import img112 from "../../../public/productDetail/Frame 22.png"
import img11 from "../../../public/productDetail/Frame 23.png"

import img10 from "../../../public/productDetail/Frame 21.png"
import img113 from "../../../public/productDetail/Frame 24.png"
import img114 from "../../../public/productDetail/Frame 25.png"
import img115 from "../../../public/productDetail/Frame 26.png"
import img116 from "../../../public/productDetail/Frame 27.png"
import img13 from "../../../public/productDetail/Frame 32.png"
import img14 from "../../../public/productDetail/Frame 33.png"
import img15 from "../../../public/productDetail/Frame 34.png"
import img16 from "../../../public/productDetail/Frame 38.png"

function page() {
  return (
    <div className="w-full">

  <div className="block space-y-10 md:space-y-5 justify-evenly md:flex gap-5 mt-5">
    
<div className="flex justify-center flex-col  md:flex md:flex-row space-y-5 gap-5 ml-5">
  <div className="flex order-2 md:order-1  md:block gap-5 space-y-2 mx-auto md:space-y-5 mt-5 ">
  <Image src={img2} alt="first image" className='w-24'/> 
  <Image src={img3} alt="first image" className='w-24' /> 
  <Image src={img4} alt="first image" className='w-24'/> 
  </div>
    <div className=" order-1 md:order-2">
     <Image  className="mx-auto md:mx-none w-80 md:w-[450px]"  src={img} alt="second image" /> 
    </div>
  </div>
  {/* card data */}
  <div className="space-y-5 ml-14 md:ml-5">
    <h1 className="font-bold text-xl md:text-3xl ">ONE LIFE GRAPHIC T-SHIRT</h1>
  <Image src={img5} alt=""/> 
  <div className="flex gap-5">
    <h1 className="font-extrabold text-2xl">$260</h1>
    < h1 className="font-extrabold text-2xl text-gray-300"> <del>$360</del></h1> 
    <h1 className="w-16 px-2 pt-1 bg-red-200 font-bold text-xl text-red-500 border-2 rounded-full">-40%</h1>
    </div>  
  <p className="w-80 md:w-[500px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda accusamus possimus venia</p>
 
  <div className="space-y-4">
    <h1>Select Colour</h1>
    <h2> <Image src={img8} alt=""/> </h2>
  </div>
  <hr className='w-52'/>
    <h1>Choose size</h1>
  <div className="flex justify-between md:space-x-3 pr-3">
    <button className="btn hover:bg-black hover:text-white text-gray-500 rounded-2xl w-16 md:w-28">Small</button>
    <button className="btn hover:bg-black hover:text-white text-gray-500 rounded-2xl w-16 md:w-28">Medium</button>
    <button className="btn bg-black hover:bg-black hover:text-white text-white rounded-2xl w-16 md:w-28">Large</button>
    <button className="btn hover:bg-black hover:text-white text-gray-500 rounded-2xl w-16 md:w-28">X-Large</button>
    
  </div>
  <hr className='w-52'/>
  <div className="flex space-x-8 pr-2 md:px-0">
  <Image src={img9} alt=""/>
  <button className="btn bg-black hover:bg-black hover:text-white text-white rounded-full w-52  md:w-96 lg:w-96">add to cart</button> 
  </div>
  </div>

</div>
{/* detail */}
<div>
  <div className='px-3 md:px-0'>
    <ul className="flex justify-evenly mt-16">
      <li>product detail</li>
      <li className="font-bold text-xl ">Rating & Reviews</li>
      <li>FAQs</li>
    </ul>
  </div>
  <hr className="mt-5 w-52 ml-8"/>
  <div className='px-6 md:px-0'>
    <ul className="ml-5 md:ml-10 mr-0 md:mr-10 mt-5 flex justify-between">
      <li className="flex"><h1 className="font-bold text-2xl ">All Reviews</h1><h1 className="pt-1">(451)</h1></li>
      <li><Image src={img10} alt=""/> </li>
    </ul>
  </div>
</div>
{/* card detail */}
<div className="mt-6 ">
<div className="ml-8 md:ml-0 mt-5 space-y-4 md:space-y-0 block md:flex justify-around">
<Image className="w-96 md:w-[700px]" src={img11} alt=""/>
<Image className="w-96 md:w-[700px]" src={img112} alt=""/>
</div>
<div className="ml-8 md:ml-0 mt-5 space-y-4 md:space-y-0 block md:flex justify-around">
<Image className="w-96 md:w-[700px]" src={img113} alt=""/>
<Image className="w-96 md:w-[700px]" src={img114} alt=""/>
</div>
<div className="ml-8 md:ml-0 mt-5 space-y-4 md:space-y-0 block md:flex justify-around">
<Image className="w-96 md:w-[700px]" src={img115} alt=""/>
<Image className="w-96 md:w-[700px]" src={img116} alt=""/>
</div>
</div>
<div  className="flex justify-center mt-10"><button className="btn rounded-full bg-white">lead more reviews</button></div>
{/* black card */}
<div>
<h1 className="font-extrabold mt-10 flex justify-center text-2xl md:text-4xl ">
YOU MIGHT ALSO LIKE
</h1>
<div className="flex flex-col justify-center md:flex md:flex-row md:justify-center gap-x-0 md:gap-x-16">
<div className="flex gap-x-4 md:gap-x-16">
<div
      className="bg-white  w-full max-w-sm overflow-hidden font-[sans-serif] mt-4">
      <div className="md:min-h-[256px]">
        <Image
            src={img13}
            alt="login-image"
            className="w-full"
          />
      </div>

      <div className="p-6 space-y-4">
        <p className="mt-4 text-md font-semibold text-text leading-relaxed">T-shirt with Tape Details
        </p>
        <div className="flex gap-5">
        <h1 className="font-extrabold text-lg md:text-2xl">$120</h1>
          </div>       
      </div>
    </div>
    {/* card2 */}
      <div
      className="bg-white  w-full max-w-sm overflow-hidden  font-[sans-serif] mt-4">
      <div className="md:min-h-[200px]">
        <Image
            src={img14}
            alt="login-image"
            className="w-full"
          />
      </div>

      <div className="p-6 space-y-4">
        <p className="mt-4 text-md font-semibold text-text leading-relaxed">Skinny Fit Jeans
        </p>
        <div className="flex gap-5">
          <h1 className="font-extrabold text-lg md:text-2xl">$240</h1>
          < h1 className="font-extrabold text-lg md:text-2xl text-gray-300"><del>$260</del> </h1>
           <h1 className="w-14 mr-3 md:w-16 px-2 pt-1 bg-red-200  text-sm md:text-xl text-red-500 border-0 rounded-full">-20%</h1>
          </div>       
      </div>
    </div>
    </div>
<div className="hidden md:flex gap-x-16">
<div
      className="bg-white  w-full max-w-sm overflow-hidden font-[sans-serif] mt-4">
      <div className="md:min-h-[256px]">
        <Image
            src={img15}
            alt="login-image"
            className="w-full"
          />
      </div>

      <div className="p-6 space-y-4">
        <p className="mt-4 text-md font-semibold text-text leading-relaxed">Checkered Shirt
        </p>
        <div className="flex gap-5">
          <h1 className="font-extrabold text-lg md:text-2xl">$180</h1>
</div>       
      </div>
    </div>
    {/* card2 */}
      <div
      className="bg-white  w-full max-w-sm overflow-hidden  font-[sans-serif] mt-4">
      <div className="md:min-h-[256px]">
        <Image
            src={img16}
            alt="login-image"
            className="w-full"
          />
      </div>

      <div className="p-6 space-y-4">
        <p className="mt-4 text-md font-semibold text-text leading-relaxed">Sleeva Striped T-shirt
        </p>
        <div className="flex gap-5">
          <h1 className="font-extrabold text-lg md:text-2xl">$130</h1>
          < h1 className="font-extrabold text-lg md:text-2xl text-gray-300"><del>$160</del> </h1>
           <h1 className="w-14 mr-3 md:w-16 px-2 pt-1 bg-red-200  text-sm md:text-xl text-red-500 border-0 rounded-full">-30%</h1>
          </div>       
      </div>
    </div>
    </div>
</div>
<div className="navbar bg-white text-neutral-content border-b border-t border-black mx-auto">
  <button className="text-xl text-black mx-auto">veiw All</button>
</div>
</div>

  </div>
  )
}

export default page