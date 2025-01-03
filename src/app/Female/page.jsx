import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";


export default function ForMale() {
    return (
<div>
    <div className="bg-black h-[50px] flex justify-between items-center text-xl text-lime-500 font-medium gap-2 px-5"><h1 >SECTION FOR MALES</h1>
    <h1>We make Cloths for Families too</h1></div>
    <div className="flex flex-1 h-[calc(100dvh-50px)] w-screen   bg-rose-200">
    <div>
            <img src="34.jpeg" alt="" className=" object-contain h-[500px] w-full ml-[10px] rounded-full hover:rotate-3 duration-700 " />
        </div>

        <div className="flex flex-col justify-center items-center gap-5 ml-4">
            <h1 className="text-2xl text-lime-500 font-semibold text-center">"A well-tailored suit is the ultimate symbol of sophistication and power for any man."</h1>
            <p>"Clothes make the man, but confidence makes the outfit complete. A well-tailored suit is to men what lingerie is to women – irresistible."</p>
        </div>
        <div>
            <img src="33.jpg" alt="" className=" object-contain h-[500px] w-full pr-[25px] rounded-full hover:-rotate-3 duration-700" />
        </div>
    </div>
    {/* second */}
    <div><h1 className="text-2xl text-lime-500 font-semibold flex justify-center">Here are some of samples</h1></div>
    <div className="grid grid-cols-4 gap-2 mx-5 mt-3">

        <img src="31.jpg" alt="" className="h-[280px] w-[250px] rounded-md hover:rotate-3 duration-700 object-cover" />
        <img src="32.jpg" alt="" className="h-[280px] w-[250px] rounded-md hover:rotate-3 duration-700 object-cover" />
        <img src="25.jpg" alt="" className="h-[280px] w-[250px] rounded-md hover:rotate-3 duration-700 object-cover" />
        <img src="26.jpg" alt="" className="h-[280px] w-[250px] rounded-md hover:rotate-3 duration-700 object-cover" />
        <img src="27.jpg" alt="" className="h-[280px] w-[250px] rounded-md hover:rotate-3 duration-700 object-cover" />
        <img src="29.jpg" alt="" className="h-[280px] w-[250px] rounded-md hover:rotate-3 duration-700 object-cover" />
        <img src="28.jpg" alt="" className="h-[280px] w-[250px] rounded-md hover:rotate-3 duration-700 object-cover" />
        <img src="30.jpg" alt="" className="h-[280px] w-[250px] rounded-md hover:rotate-3 duration-700 object-cover" />
    </div>
    <div>
        <h1 className="text-2xl text-lime-500 font-semibold flex justify-center">Model also wear our dersses</h1>
    </div>
    <div className="grid grid-cols-2 object-cover mx-[120px] gap-5">
        <img src="36.jpeg" alt="" className="h-[380px] w-[450px] rounded-md hover:rotate-3 duration-700 object-cover" />
        <img src="35.jpeg" alt="" className="h-[380px] w-[450px] rounded-md hover:-rotate-3 duration-700 object-cover" />
        <img src="37.jpeg" alt="" className="h-[380px] w-[450px] rounded-md hover:rotate-3 duration-700 object-cover" />
        <img src="38.jpeg" alt="" className="h-[380px] w-[450px] rounded-md hover:-rotate-3 duration-700 object-cover" />
    </div>
    <h1 className="text-2xl text-lime-500 font-semibold flex justify-center">Currently we are working with!!</h1>
    <div className="grid grid-cols-3 gap-5 justify-between px-5 pt-5 items-center text-center">
        <h1 className="bg-purple-500 rounded-lg h-[30px] text-white">J. (Junaid Jamshed)</h1>
        <h1 className="bg-purple-500 rounded-lg h-[30px] text-white">Khaadi
        </h1>
        <h1 className="bg-purple-500 rounded-lg h-[30px] text-white">Gul Ahmed
        </h1>
        <h1 className="bg-purple-500 rounded-lg h-[30px] text-white">Amir Adnan</h1>
        <h1 className="bg-purple-500 rounded-lg h-[30px] text-white">Edenrobe</h1>
        <h1 className="bg-purple-500 rounded-lg h-[30px] text-white">
        Outfitters</h1>
    </div>
    
<footer className="bg-slate-900 mt-5 flex flex-col-4 justify-between text-white h-[150px]">
  <div className="ml-5">
    <h1 className="text-xl my-2 text-yellow-500 ">Brands</h1>
    <p>Gucci</p>
    <p>Zara</p>
    <p>Nike</p>
    <p>H&M</p>
  </div>
  <div>
  <h1 className="text-xl my-2 text-yellow-500 ">Why Us</h1>
    <p>Quality</p>
    <p>Style</p>
    <p>Value</p>
    <p>Trust</p>
  </div>
  <div>
  <h1 className="text-xl my-2 text-yellow-500 ">Branches</h1>
    <p>Islamabad</p>
    <p>Lahore</p>
    <p>Muzaffarabad</p>
    <p>Multan</p>
  </div>
  <div className="mr-5 gap-2">
  <h1 className="text-xl my-2 text-yellow-500 ">Contact</h1>
    <p>ph:03456785646</p>
    <div className="flex flex-col ">
      <div className="flex justify-center items-center gap-1">
      <div className="bg-blue-500 rounded">
      <FaFacebook />
      </div>
      <a href="">Facebook</a>
      </div>
      <div className="flex justify-center items-center gap-1">
      <div className="bg-red-500 rounded">
      <FaInstagram />
      </div>
      <a href="">Instagram</a>
      </div>
      <div className="flex justify-center items-center gap-1 mr-5">
      <div className="bg-blue-500 rounded">
      <FaTwitter />
      </div>

      <a href="">Twitter</a>
      </div>
  
    </div>
   
  </div>
</footer>
<p className="bg-slate-900 text-yellow-500 text-center">The copyrights belongs to @Dress Up!!</p>

</div>
    );
}