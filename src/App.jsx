import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import New from "./pages/New";
import Following from "./pages/Following";
import Popular from "./pages/Popular";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Menu/>
      <Routes>
      <Route exact path="/" element={< Popular/>}/>
        <Route exact path="/new" element={< New/>}/>
        <Route exact path="/following" element={< Following/>}/>
        
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App