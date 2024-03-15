import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className="mt-12 w-full text-black px-4 md:px-[100px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8">
           <h2 className=" pl-10  text-black font-bold font-style: italic text-2xl">Dribbble</h2>
           <div className='w-[800px]'> 
            <ul className='flex item-center justify-evenly ml-8 text-[14px] text-gray-600 font-bold'>
                <li>For designers</li>
                <li>Hire talent</li>
                <li>Inspiration</li>
                <li>Adverising</li>
                <li>Blog</li> 
                <li>About</li> 
                <li>Carrers</li> 
                <li>Support</li> 

           </ul>

           </div>
           <div className=" w-[200px] flex item-center justify-evenly ml-8">
             <FaTwitter />
             <FaFacebookSquare />
             <FaInstagram />
             <FaPinterest />
           </div>
           
       
        </div>
        
    
       <p className="py-2 pb-6 text-center text-black text-sm">@2024 Dribbble</p>

    </>
  )
}

export default Footer