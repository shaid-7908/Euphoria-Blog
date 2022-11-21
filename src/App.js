// import Topbar from "./Component/Topbar/Topbar";
import Homepage from "./Pages/Home/Homepage";
import Blogs from "./Pages/Blogs/Blogs";
import {Routes ,Route} from 'react-router-dom'
import Login from "./Component/Login/Login";
import Technology from "./Pages/Blogs/Blogpages/Technology";
import Movie from "./Pages/Blogs/Blogpages/Movie";
import Sports from "./Pages/Blogs/Blogpages/Sports";
import Single from "./Pages/Single/Single";
import Write from "./Pages/write/wirte";


function App() {
  return (
   <>
 
   <Routes>
   <Route path="/" element={<Homepage/>}/>
   <Route path="/blogs" element={<Blogs/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/technology" element={<Technology/>}/>
   <Route path="/movie" element={<Movie/>}/>
   <Route path="/sports" element={<Sports/>}/>
   <Route path="/singlepost" element={<Single/>}/>
   <Route path="/write" element={<Write/>}/>
   </Routes>
   </>
  );
}

export default App;
