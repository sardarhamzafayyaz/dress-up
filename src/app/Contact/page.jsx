import Image from "next/image";
import { IoIosCall } from "react-icons/io";

import { MdOutlineMail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";




export default function ContactUsPage(){
    return(
        <div>
           <div className="flex absolute ">
            <img src="40.jpeg" alt="" className=" h-screen w-screen object-cover brightness-95" />
            </div>
            <div className="h-screen w-screen flex justify-center items-center text-black font-bold relative">
                <h1 className="text-5xl">Contact Us</h1>
            </div>
            <h1 className="text-2xl text-lime-500 font-semibold flex justify-center mt-1 ">You Can Contact 24/7</h1>
            
            {/* form */}
            <div className="flex flex-1 gap-[200px] ml-[400px] my-4">
                <div className="bg-rose-300 w-[200px] flex flex-col items-center justify-center gap-2 rounded-md">
                <div className="flex items-center gap-2 mt-2 text-pink-700 ">
                <IoIosCall />
                <h2 className="ring-2 rounded-md ring-rose-800 p-2 bg-yellow-200">Contact Us</h2>
                </div>
                    <p className="text-rose-700">03115675677</p>
                   <div className="flex items-center gap-2 text-pink-700 ">
                   <MdOutlineMail />
                   <h2 className="ring-2 rounded-md ring-rose-800 p-2 bg-yellow-200">Email</h2>
                   </div>
                    <p className="text-rose-700">asad@gmail.com</p>
                   <div className="flex items-center gap-2 text-pink-700 ">
                   <FaRegAddressCard />
                   <h2 className="ring-2 rounded-md ring-rose-800 p-2 bg-yellow-200">Address</h2>
                   </div>
                    <p className="text-rose-700">islamabad house 11,st 7</p>

                </div>
                <div>
                <form className="flex flex-col gap-3 ">
                <div className="ring-1 ring-rose-700 rounded-md">
                <label htmlFor="Name" className="p-3 w-[50px]"></label>
                <input type="text" placeholder="Name"/>
                </div>
                <div className="ring-1 ring-rose-700 rounded-md">
                <label htmlFor="Email"></label>
                <input type="Email" placeholder="Email "/>
                </div>
                <div className="ring-1 ring-rose-700 rounded-md">
                <label htmlFor="Contact"></label>
                <input type="number" placeholder="Contact No "/>
                </div>
                <div className="ring-1 h-[170px] ring-rose-700 rounded-md">
                <label htmlFor="Message"></label>
                <input type="text" placeholder="Type a message" />
                </div>
                <button className="p-2 bg-green-700 rounded-md text-white hover:bg-rose-400">Submit</button>
             
            </form>
                </div>
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