import Project from "./Project"
import img18 from "../img/img18.jpg"
import img19 from "../img/img19.jpg"
import img20 from "../img/img20.jpg"
import img21 from "../img/img21.jpg"
import img22 from "../img/img22.jpg"
import img23 from "../img/img23.jpg"
import img24 from "../img/img24.jpg"
import img25 from "../img/img25.jpg"




const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 sm:justify-center">
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img18} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img19} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img20} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img21} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img22} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img23} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img24} alt=""/>
         <Project/>
        </div>
        <div className="max-w-xs mx-2 my-4 flex-grow flex-shrink">
         <img className="rounded-xl w-full h-60 object-cover" src={img25} alt=""/>
         <Project/>
        </div>
    </div>
  )
}

export default Projects