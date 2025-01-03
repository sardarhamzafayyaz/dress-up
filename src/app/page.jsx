import Image from "next/image";
import { GiTravelDress } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";



export default function Home() {
  return (
    <div>
      
      {/* hero section */}
      <div className="absolute">
        <img src="1.jpg" alt="image" className="h-screen w-screen object-cover brightness-75" />
      </div>
      <div className=" flex flex-col justify-center items-center w-screen h-screen text-white relative">
        <h1 className="text-3xl font-bold  text-yellow-400">"Find Your Perfect Fit: Discover the Dress That Defines You!"</h1>
        <p className="text-l text-blue-300 ">"Find your perfect fit with our exclusive collection of dresses,
        designed to celebrate every style and silhouette. From timeless classics<br/> 
        <span className="flex justify-center text-l text-yellow-400"> to the latest trends, discover the dress that defines you and makes every moment unforgettable!"</span></p>
      </div>
      {/* images */}
      <div>
        <h1 className="text-3xl font-bold  text-yellow-400 flex justify-center">We have Got the the best ever designs </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 px-4 mt-4 ">
        <div className="h-[400px]">
        <img src="2.jpg" alt="" className="w-full h-full object-cover rounded-md hover:rotate-2 duration-200 " />
        </div>
        <div className="h-[400px]">
        <img src="3.jpg" alt="" className="w-full h-full object-cover rounded-full hover:rotate-2 duration-200" />
        </div>
        <div className="h-[400px] ">
        <img src="4.jpg" alt="" className="w-full h-full object-cover rounded-md hover:rotate-2 duration-200 " />
        </div>
        <div className="h-[400px]">
        <img src="5.jpg" alt="" className="w-full h-full object-cover rounded-md hover:rotate-2 duration-200" />
        </div>
        <div className="h-[400px]">
        <img src="6.jpg" alt="" className="w-full h-full object-cover rounded-full hover:rotate-2 duration-200" />
        </div>
        <div className="h-[400px]">
        <img src="7.jpg" alt="" className="w-full h-full object-cover rounded-md  hover:rotate-2 duration-200" />
        </div>
        
      </div>
      <div>
        <h1 className="text-3xl font-bold  text-yellow-400 flex justify-center mt-5 mb-5">Lets see what our customers says</h1>
      </div>
     <div className="flex flex-col items-center gap-5  ">
     <div className="flex w-[720px] h-[120px] bg-orange-300 justify-items-center gap-5 ml-4 rounded-md hover:rotate-1 duration-700">
        <img className="h-[120px] w-[120px] rounded-full" src="8.jpg" alt="" />
        <p className="flex justify-center items-center text-white">"This dress made me feel like a million bucks—perfect fit, stunning style!"
        </p>
      </div>
      <div className="flex w-[720px] h-[120px] bg-blue-400 justify-items-center gap-4 ml-4 rounded-md hover:rotate-1 duration-700">
        <img className="h-[120px] w-[120px] rounded" src="9.jpg" alt="" />
        <p  className="flex justify-center items-center text-white">"I’ve never received so many compliments—my new go-to for every occasion!"
        </p>
      </div><div className="flex w-[720px] h-[120px] bg-green-400 justify-items-center gap-5 ml-4 rounded-md hover:rotate-1 duration-700">
        <img className="h-[120px] w-[120px] rounded" src="10.jpg" alt="" />
        <p className="flex justify-center items-center text-white">"Effortlessly chic and so comfortable—I didn’t want to take it off!"

        </p>
      </div><div className="flex w-[720px] h-[120px] bg-purple-400 justify-items-center gap-5 ml-4 rounded-md hover:rotate-1 duration-700">
        <img className="h-[120px] w-[120px] rounded-full" src="11.jpg" alt="" />
        <p className="flex justify-center items-center text-white ">"The designs are unique, and the fit is flawless—my new favorite brand!"

        </p>
      </div>
     </div>
     <h2 className="text-3xl font-bold  text-yellow-400 flex justify-center my-5" >Why dressing is important!!!</h2>
     <h1 className="bg-rose-500 text-white h-full w-[900px] flex justify-center items-center text-center ml-[160px] rounded-md mt-5 hover:bg-orange-300">A good personality is the essence of a person’s character, shining through in the way they treat others,approach challenges, and carry themselves in everyday life. It’s marked by qualities like kindness, integrity, and a positive attitude that uplift those around them. People with good personalities are empathetic, genuine, and confident without being arrogant, making them approachable and trustworthy. They listen more than they speak, are humble in success, and resilient in the face of adversity. Ultimately, a good personality isn’t just about being likable; it’s about having a strong moral compass and the ability to inspire and connect with others authentically.

</h1>
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
<p className="bg-slate-900 text-red-500 text-center">The copyrights belongs to @Dress Up!!</p>
    </div>
 
  );
}
