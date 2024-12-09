import Image from "next/image";
import img from "../../public/assestsHome/1212.png";
import img2 from "../../public/assestsHome/Framea1.png";
import img3 from "../../public/assestsHome/Framea2.png";
import img4 from "../../public/assestsHome/Framea3.png";
import img5 from "../../public/assestsHome/Framea4.png";
import img6 from "../../public/assestsHome/Framea5.png";
import img7 from "../../public/assestsHome/Framea6.png";
import img8 from "../../public/assestsHome/Framea7.png";
import img9 from "../../public/assestsHome/Framea8.png";
import imgb1 from "../../public/assestsHome/Frameb4.png";
import imgb2 from "../../public/assestsHome/Frameb3.png";
import imgb3 from "../../public/assestsHome/Frameb2.png";
import imgb4 from "../../public/assestsHome/Frameb1.png";
import card from "../../public/assestsHome/card1.png";
import "./globals.css";

export default function Home() {
  return (
    <div>
    <div className="w-full h-full md:h-[600px] bg-customGray md:flex md:items-center space-y-8 pt-5">
      <div className="block md:flex justify-center w-full px-10 items-center mx-auto">

        <div className="rounded-md max-w-lg space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-stone-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="Btn btn bg-black text-xs text-white px-4 py-2 w-96 md:w-44">
            Shop Now
          </button>
        </div>
        <div className="flex flex-row flex-wrap space-x-8 space-y-5 justify-center items-center md:hidden">
  <div>
    <h1 className="text-5xl font-semibold relative top-3">200+</h1>
    <p className="text-xs text-stone-500 relative top-3">International Brands</p>
  </div>
  <div>
    <h1 className="text-5xl font-semibold">2,000+</h1>
    <p className="text-xs text-stone-500">High-Quality Products</p>
  </div>
  <div>
    <h1 className="text-5xl font-semibold">30,000+</h1>
    <p className="text-xs text-stone-500">Happy Customers</p>
  </div>
</div>


        {/* Image Section */}
        <div className="md:flex md:items-center">
          <Image
            src={img}
            alt="login-image"
            className="object-contain w-full h-full md:h-[600px] md:w-auto"
          />
          
        </div>
      </div> 

    </div>
    <div className="border-b-4 border-t-4 border-yellow-600">
<div className="navbar bg-black text-neutral-content flex flex-wrap justify-around">
<h1 className="text-2xl font-bold text-white">VERSACE</h1>
<h1 className="text-2xl font-bold text-white">ZNA</h1>
<h1 className="text-2xl font-bold text-white">GUCCI</h1>
<h1 className="text-2xl font-bold text-white">PRADA</h1>
<h1 className="text-2xl font-bold text-white">Colvin Klein</h1>
</div>
     </div>

{/* CARD 1 */}
     <div className="pt-8">
<h1 className="font-extrabold flex justify-center text-2xl md:text-4xl ">
NEW ARRIVALS
</h1>
<div className="flex flex-col justify-center md:flex md:flex-row md:justify-center gap-x-0 md:gap-x-16">
<div className="flex gap-x-4 md:gap-x-16">
<div
      className="bg-white  w-full max-w-sm overflow-hidden font-[sans-serif] mt-4">
      <div className="md:min-h-[256px]">
        <Image
            src={img6}
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
      <div className="md:min-h-[256px]">
        <Image
            src={img7}
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
            src={img9}
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
            src={img8}
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








{/* CARD 2*/}
<div className="pt-8">
<h1 className="font-extrabold flex justify-center text-2xl md:text-4xl ">
  TOP SELLING
</h1>
<div className="flex flex-col justify-center md:flex md:flex-row md:justify-center gap-x-0 md:gap-x-16">
<div className="flex gap-x-4 md:gap-x-16">
<div
      className="bg-white  w-full max-w-sm overflow-hidden font-[sans-serif] mt-4">
      <div className="md:min-h-[256px]">
        <Image
            src={img2}
            alt="login-image"
            className="w-full"
          />
      </div>

      <div className="p-6 space-y-4">
        <p className="mt-4 text-md font-semibold text-text leading-relaxed">Vertical Stripped Shirt
        </p>
        <div className="flex gap-5">
        <h1 className="font-extrabold text-lg md:text-2xl">$212</h1>
          < h1 className="font-extrabold text-lg md:text-2xl text-gray-300"><del>$232</del> </h1>
           <h1 className="w-14 mr-3 md:w-16 px-2 pt-1 bg-red-200  text-sm md:text-xl text-red-500 border-0 rounded-full">-20%</h1> 
          </div>       
      </div>
    </div>
    {/* card2 */}
      <div
      className="bg-white  w-full max-w-sm overflow-hidden  font-[sans-serif] mt-4">
      <div className="md:min-h-[256px]">
        <Image
            src={img3}
            alt="login-image"
            className="w-full"
          />
      </div>

      <div className="p-6 space-y-4">
        <p className="mt-4 text-md font-semibold text-text leading-relaxed">Loose Fit Bermuda Shorts
        </p>
        <div className="flex gap-5">
          <h1 className="font-extrabold text-lg md:text-2xl">$145</h1>
          </div>       
      </div>
    </div>
    </div>
<div className="hidden md:flex gap-x-16">
<div
      className="bg-white  w-full max-w-sm overflow-hidden font-[sans-serif] mt-4">
      <div className="md:min-h-[256px]">
        <Image
            src={img4}
            alt="login-image"
            className="w-full"
          />
      </div>

      <div className="p-6 space-y-4">
        <p className="mt-4 text-md font-semibold text-text leading-relaxed">Feded Skinny Jeans
        </p>
        <div className="flex gap-5">
          <h1 className="font-extrabold text-lg md:text-2xl">$80</h1>
</div>       
      </div>
    </div>
    {/* card2 */}
      <div
      className="bg-white  w-full max-w-sm overflow-hidden  font-[sans-serif] mt-4">
      <div className="md:min-h-[256px]">
        <Image
            src={img5}
            alt="login-image"
            className="w-full"
          />
      </div>

      <div className="p-6 space-y-4">
        <p className="mt-4 text-md font-semibold text-text leading-relaxed">Vertical Striped Shirt
        </p>
        <div className="flex gap-5">
          <h1 className="font-extrabold text-lg md:text-2xl">$210</h1>
          </div>       
      </div>
    </div>
    </div>
</div>
<div className="navbar bg-white text-neutral-content border-b border-t border-black mx-auto">
  <button className=" text-xl text-black mx-auto">veiw All</button>
</div>
</div>


<br/>
<div className="border-2 space-y-4 rounded-xl flex flex-col justify-center md:justify-center bg-Gray w-96 md:w-[1300px] mx-auto md:h-[1000px] items-center px-10 py-5 md:py-0">
<h1 className="text-3xl md:text-5xl font-extrabold ml-8">BROWSE BY DRESS STYLE</h1>
<div className="block md:flex md:flex-row space-y-5 md:space-x-5 md:space-y-0">
<div className="card bg-base-100 w-80 md:w-96 h-72 md:h-96 shadow-xl">
  <Image
            src={imgb1}
            alt="login-image"
            className="w-full h-full"
          />
 
  </div>
<div className="card bg-base-100  h-72 md:h-96 shadow-xl">
  
  <Image
            src={imgb2}
            alt="login-image"
            className="w-full h-full"
          />
  </div>


</div>
{/* qq */}


<div className="block md:flex space-y-5 md:space-x-5 md:space-y-0">
<div className="card bg-base-100  h-72 md:h-96 shadow-xl">
  <Image
            src={imgb4}
            alt="login-image"
            className="w-full h-full"
          />
 
  </div>
<div className="card bg-base-100 w-80 md:w-96 h-72 md:h-96 shadow-xl">
  
  <Image
            src={imgb3}
            alt="login-image"
            className="w-full h-full"
          />
  </div>


</div>

</div>




<div>
    <div className="flex overflow-x-scroll space-x-4 p-6 scrollbar-hide">
      <div className="card border-2 border-1 p-6 rounded-lg shadow-md min-w-[300px]">
      <Image
            src={card}
            alt="login-image"
            className="object-contain w-full h-full md:h-[400px] md:w-auto"
          />
           </div>
      <div className="card border-2 border-1 p-6 rounded-lg shadow-md min-w-[300px]">
      <Image
            src={card}
            alt="login-image"
            className="object-contain w-full h-full md:h-[400px] md:w-auto"
          />
          </div>
      <div className="card border-2 border-1 p-6 rounded-lg shadow-md min-w-[300px]">
      <Image
            src={card}
            alt="login-image"
            className="object-contain w-full h-full md:h-[400px] md:w-auto"
          />
          </div>
    </div>
    </div>
    </div>

);
}
