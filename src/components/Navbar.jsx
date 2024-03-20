import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-6">
      <div className="flex items-center md:w-[440px]">
        <ul className="flex flex-1 justify-between ml-8 text-[14px] text-gray-600 font-bold">
          <li>Find designers</li>
          <li>Inspiration</li>
          <li>Courses</li>
          <li>Jobs</li>
          <li>Go Pro</li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="flex font-bold italic text-xl md:mt-0 sm:mt-8">Dribbble</h2>
      </div>
      <div className="flex items-center justify-between md:w-auto w-full mt-4 md:mt-0">
        <div className="flex items-center">
          <BsSearch className="text-gray-600" />
          <input className="outline-none px-2" placeholder="Search" type="text" />
        </div>
        <div className="flex items-center justify-evenly ml-4 md:ml-0">
          <button className="px-[12px] py-[9px] text-[15px] rounded-md hover:bg-gray-400">Log in</button>
          <button className="bg-black px-[12px] py-[9px] text-[15px] text-white rounded-full hover:bg-gray-400">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
