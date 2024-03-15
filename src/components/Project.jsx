import { FaHeart } from "react-icons/fa";
import { TbEyeFilled } from "react-icons/tb";


const Project = () => {
  return (
    <div className="rounded-xl mb-5">
        <div className="flex justify-between p-2">
           <div className="flex items-center">
             <h3 className="font-bold text-black text-[15px]">Abhi</h3>
             <h3 className="bg-gray-300 text-white p-[2px] text-xs font-bold rounded-md ml-2">PRO</h3>
           </div>
           <div className="flex space-x-2">
              <div className="flex items-center">
                <FaHeart className="h-3 w-3 text-gray-500" />
                <h2 className="text-sm">58</h2>
              </div>
              <div className="flex items-center">
                <TbEyeFilled className="h-3 w-3 text-gray-500" />
                <h2 className="text-sm">25.2k</h2>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Project