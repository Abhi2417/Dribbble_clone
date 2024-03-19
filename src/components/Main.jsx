/* eslint-disable react/no-unescaped-entities */
import img1 from "../img/img1.jpg"

const Main = () => {
  return (
    <div className="relative h-[480px] sm:h-[320px] md:h-[480px]">
        <div className="absolute z-40 flex h-full flex-col items-start justify-center space-y-4 ml-12 text-white w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl">Discover the world's top designers & creatives</h2>
            <p className="text-sm sm:text-base">Dribble is the leading destination to find & showcase creative work and home to the world's best design professionals</p>
            <button className="bg-black px-[12px] py-[9px] text-[15px] text-white rounded-full hover:bg-gray-400 text-bold">Sign up</button>

           
        </div>
        <div className="bg-black absolute opacity-90 w-full h-full">
         <img className="w-full h-full object-cover " src={img1} alt=""></img>
        </div>
    </div>
  )
}

export default Main