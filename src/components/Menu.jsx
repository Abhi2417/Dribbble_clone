import { useState } from "react";
import View from "./View";
import { RiArrowDropDownLine } from "react-icons/ri";


const Menu = () => {

  const [menu,setMenu]=useState(false);


  const showMenu=()=>{
    setMenu(!menu)
  }
 

  return (
    <div className="flex items-center text-[15px] justify-evenly max-w-8xl mt-8 text-gray-600">
        <div onClick={showMenu}>
        
            <button className="items-center justify-between flex border border-gray-400 rounded-md h-8 w-24">
              <h2 className="ml-4">Popular</h2>
            < RiArrowDropDownLine />
            </button>
            {menu && <View/>}
           
           
        </div>
  
        <div className=" w-[800px]">
           
           
            <ul className="flex justify-between font-bold">
                <li className="hover:text-black cursor-pointer">Discover</li>
                <li className="hover:text-black cursor-pointer">Animation</li>
                <li className="hover:text-black cursor-pointer">Branding</li>
                <li className="hover:text-black cursor-pointer">Illustration</li>
                <li className="hover:text-black cursor-pointer">Mobile</li>
                <li className="hover:text-black cursor-pointer">Print</li>
                <li className="hover:text-black cursor-pointer">Product Design</li>
                <li className="hover:text-black cursor-pointer">Typography</li>
                <li className="hover:text-black cursor-pointer">Web Design</li>
            </ul>
        </div>
        <button className="border border-gray-400 rounded-md h-8 w-24">Filters</button>
    </div>
  )
}

export default Menu