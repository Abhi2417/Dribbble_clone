import { useState } from "react";
import View from "./View";
import { RiArrowDropDownLine } from "react-icons/ri";


const Menu = () => {

  const [menu,setMenu]=useState(false);


  const showMenu=()=>{
    setMenu(!menu)
  }
 

  return (
    <div className="flex flex-col md:flex-row items-center text-[15px] justify-evenly max-w-8xl mt-8 text-gray-600">
        <div className="mb-4 md:mb-0" onClick={showMenu}>
        
            <button className="flex items-center justify-between  border border-gray-400 rounded-md h-8 w-24">
              <h2 className="ml-4">Popular</h2>
            < RiArrowDropDownLine />
            </button>
            {menu && <View/>}
           
           
        </div>
  
        <div className=" w-full md:w-[800px] mb-4 md:mb-0 md:ml-4">
           
           
            <ul className="md:flex justify-between  font-bold md:mx-0 sm:ml-12">
                <li className="hover:text-black cursor-pointer mb-2 md:mb-0">Discover</li>
                <li className="hover:text-black cursor-pointer mb-2 md:mb-0">Animation</li>
                <li className="hover:text-black cursor-pointer mb-2 md:mb-0">Branding</li>
                <li className="hover:text-black cursor-pointer mb-2 md:mb-0">Illustration</li>
                <li className="hover:text-black cursor-pointer mb-2 md:mb-0">Mobile</li>
                <li className="hover:text-black cursor-pointer mb-2 md:mb-0">Print</li>
                <li className="hover:text-black cursor-pointer mb-2 md:mb-0">Product Design</li>
                <li className="hover:text-black cursor-pointer mb-2 md:mb-0">Typography</li>
                <li className="hover:text-black cursor-pointer mb-2 md:mb-0">Web Design</li>
            </ul>
        </div>
        <button className="border border-gray-400 rounded-md h-8 w-24">Filters</button>
    </div>
  )
}

export default Menu