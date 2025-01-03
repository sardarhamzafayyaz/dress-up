"use client";
import { usePathname } from "next/navigation";
import { GiTravelDress } from "react-icons/gi";

export function Navbar() {
    const pathname = usePathname();

    console.log(pathname.split("/")[1])
    return (
        <div className="  flex justify-between bg-black h-[40px] w-full fixed bg-auto z-50">
        <div className="flex justify-center items-center ml-3 text-yellow-400 text-xl">
        <GiTravelDress />
        <h1 >Dress Up!!</h1>
        </div>
        <div className="flex gap-[40px] justify-center items-center text-white">
          <a href="/"className={`hover:text-yellow-500 ${pathname === "/" ? "text-yellow-500 ring-1 ring-yellow-500 rounded-md p-1 " : ""}`}>Home</a>
          <a href="Male"  className={`hover:text-yellow-500 ${pathname === "/Male" ? "text-yellow-500 ring-1 ring-yellow-500 rounded-md p-1 " : ""}`}>Male</a>
          <a href="Female" className={`hover:text-yellow-500 ${pathname === "/Female" ? "text-yellow-500 ring-1 ring-yellow-500 rounded-md p-1 " : ""}`}>Female</a>
          <a href="Contact"  className={`hover:text-yellow-500 ${pathname === "/Contact" ? "text-yellow-500 ring-1 ring-yellow-500 rounded-md p-1 " : ""}`}>Contact Us</a>
          <a href="Blogs" className={`hover:text-yellow-500 ${pathname === "/Blogs" ? "text-yellow-500 ring-1 ring-yellow-500 rounded-md p-1 " : ""}`}>Blogs</a>
        </div>
        <div>
          <button className="mr-3 items-center justify-center ring-1 ring-yellow-500 mt-1 p-1 rounded-md text-white font-bold hover:text-yellow-500">Sign In</button>
        
          <button className="mr-3 items-center justify-center ring-1 ring-yellow-500 mt-1 p-1 rounded-md text-white font-bold hover:text-yellow-500">Sign Up</button>
        </div>
      </div>
    )
}