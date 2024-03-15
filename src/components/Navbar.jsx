
import {BsSearch} from "react-icons/bs"

const Navbar = () => {
  return (
    <div className='flex justify-between p-6 h-20 '>
        <div className='flex item-center w-[440px] '> 
            <ul className='flex flex-1 justify-between ml-8 text-[14px] text-gray-600 font-bold'>
                <li>Find designers</li>
                <li>Inspiration</li>
                <li>Courses</li>
                <li>Jobs</li>
               <li>Go Pro</li>  
           </ul>
       
        </div>
       <div className='flex items-center justify-center'>
           <h2 className='flex font-bold font-style: italic text-xl'>Dribbble</h2>
        </div>
          <div className="flex items-center justify-between w-4">
            <p><BsSearch /></p>
            <input className="outline-none px-2" placeholder="Search" type="text"/>
          </div>
        
        <div className='flex items-center justify-evenly w-[15%] text-gray-600 font-bold'>
          <button className="px-[12px] py-[9px] text-[15px] rounded-md hover:bg-gray-400">Log in</button>
          <button className="bg-black px-[12px] py-[9px] text-[15px] text-white rounded-full hover:bg-gray-400">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar