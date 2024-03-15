import Project from "./Project"
import img2 from "../img/img2.jpg"
import img3 from "../img/img3.jpg"
import img4 from "../img/img4.jpg"
import img5 from "../img/img5.jpg"
import img6 from "../img/img6.jpg"
import img7 from "../img/img7.jpg"
import img8 from "../img/img8.jpg"
import img9 from "../img/img9.jpg"




const Projects = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img2} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img3} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img4} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img5} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img6} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img7} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img8} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img9} alt=""/>
         <Project/>
        </div>
    </div>
  )
}

export default Projects