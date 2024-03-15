import Project from "./Project"
import img10 from "../img/img10.jpg"
import img11 from "../img/img11.jpg"
import img12 from "../img/img12.jpg"
import img13 from "../img/img13.jpg"
import img14 from "../img/img14.jpg"
import img15 from "../img/img15.jpg"
import img16 from "../img/img16.jpg"
import img17 from "../img/img17.jpg"




const Projects = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img10} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img11} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img12} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img13} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img14} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img15} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img16} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img17} alt=""/>
         <Project/>
        </div>
    </div>
  )
}

export default Projects