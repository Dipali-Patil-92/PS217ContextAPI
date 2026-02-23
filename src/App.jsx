import About from "./About";
import Student from "./Student"
import Subteacher from "./Subteacher"
import{Routes, Route} from 'react-router-dom';
import Home from './Home';
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import User from "./User";

function App(){

  return(
    <>
      {/* <Student/> */}
      {/* <Subteacher/> */}
      <Navbar/>

      <Routes>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/About" Component={About} ></Route>
        <Route path="/Contact" Component={()=><Contact/>}></Route>
        <Route path="/" Component={Subteacher}/>
        <Route path="*"  Component={Error}/>
        <Route path='/Student' element={<Student />}></Route>
        <Route path='/User/:fname/:lname' element={<User />}></Route>

      </Routes>
    </>
  )
}

export default App
