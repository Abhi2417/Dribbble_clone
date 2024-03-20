import { Link } from "react-router-dom"


const View = () => {
  return (
    <div className="bg-gray-100 w-[200px] z-10  flex flex-col absolute items-start rounded-md mt-4" >
        <button className=" text-black px-[12px] py-[9px]  rounded-md text-sm hover:bg-gray-200  cursor-pointer"><Link to="/new">New & NoteWorthy</Link></button>
        <button className=" text-black px-[12px] py-[9px]  rounded-md  text-sm hover:bg-gray-200 cursor-pointer"><Link to="/following">Following</Link></button>
        <button className=" text-black px-[12px] py-[9px]  rounded-md text-sm hover:bg-gray-200 cursor-pointer"><Link to="/">Popular</Link></button>

    </div>
  )
}

export default View