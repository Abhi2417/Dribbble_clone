import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className="mt-12 w-full text-black px-4 md:px-[100px] flex flex-col md:flex-row  space-y-6 md:space-y-0 items-center justify-between text-sm md:text-md py-8">
           <h2 className=" pl-10 flex-col md:flex-row text-black font-bold italic text-2xl md:pl-0 md:text-center md:mb-0">Dribbble</h2>
           <div className="mt-6  md:flex md:justify-between md:items-center"> 
            <ul className="md:flex md:space-x-6 md:text-base text-sm pl-10 md:pl-0 text-gray-600 font-bold">
                <li>For designers</li>
                <li>Hire talent</li>
                <li>Inspiration</li>
                <li>Advertising</li>
                <li>Blog</li> 
                <li>About</li> 
                <li>Carrers</li> 
                <li>Support</li> 

           </ul>

           </div>
           <div className=" mt-6  md:mt-0 flex justify-center md:justify-end">
             <FaTwitter className="ml-10 mr-4"/>
             <FaFacebookSquare className="mr-4" />
             <FaInstagram className=" mr-4"/>
             <FaPinterest />
           </div>
           
       
        </div>
        
    
       <p className="py-2 pb-6 text-center text-black text-sm">@2024 Dribbble</p>

    </>
  )
}

export default Footer