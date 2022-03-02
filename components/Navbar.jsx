import React, {useState} from "react";
import {Menu, Close} from "@material-ui/icons"
import Link from "next/link"


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className=" w-full fixed top-0 z-10 border-b-2 border-white">
      <div className="flex justify-between   bg-stone-700 py-4 px-8 md:py-2">
        <div className="font-neue text-2xl cursor-pointer  text-white">
          EBUE-<span className="text-red-700">MOVIE</span>
        </div>
        <div className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
          {
            open ? <Close className="text-white text-3xl" /> : <Menu className="text-white text-3xl"/>
          }
          
        </div>
        <ul onClick={()=>setOpen(!open)} className={`md:flex md:items-center md:pb:0 pb-4 absolute md:static bg-stone-700  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 text-white pl-9 transition-all duration-500 ease-in ${open && "border-b-2 border-white"} ${open ? "top-10" : "top-[-490px]"}`}>
          <Link href={"/"} passHref>
          <li className="md:mr-8 text-lg md:my-0 my-7 cursor-pointer">
            <a className={`${open && "text-white"} hover:text-gray-400 duration-500`}>Home</a>
          </li>
          </Link>
          <li className="md:mr-8 text-lg md:my-0 my-7 cursor-pointer">
            <a className={` ${open && "text-white"} hover:text-gray-400 duration-500`}>About</a>
          </li>
          <Link  href={"/contact"} passHref>
          <li className="md:mr-8 text-lg md:my-0 my-7 cursor-pointer">
          <a  className={` ${open && "text-white"} hover:text-gray-400 duration-500`}>Contact
          </a>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
